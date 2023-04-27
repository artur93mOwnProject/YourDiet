import i18next from 'i18next';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Globe } from 'react-bootstrap-icons';
import { useTranslation } from 'react-i18next';

import logoYourDiet from '../images/logo.png';

const NavigationBar = () => {
	const { t } = useTranslation();
	const logo: string = logoYourDiet as string;
	console.log(logo);

	const onChangeLanguage = (language: string) => (event: any) => {
		i18next
			.changeLanguage(language)
			.then(() => {
				return;
			})
			.catch((e) => console.log(e));
	};

	const isActive = (lang: string) => {
		return i18next.language === lang ? true : false;
	};

	return (
		<Navbar bg="dark" expand="lg" variant="dark">
			<Navbar.Brand href="#home" className="px-3 px-lg-5">
				<img src={logo} className="w-25" alt="logo_your_diet" />
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav" className="px-3">
				<Nav className="d-flex justify-content-between w-100">
					<div className="d-flex flex-column flex-lg-row">
						<Nav.Link href="#home">{t('domain.home.page')}</Nav.Link>
						<Nav.Link href="#yourdiet">{t('domain.your.diet')}</Nav.Link>
						<Nav.Link href="#insertmeal">{t('domain.add.meal')}</Nav.Link>
						<Nav.Link href="#browsemeal">{t('domain.browse.meal')}</Nav.Link>
					</div>
					<div className="d-flex flex-column flex-lg-row">
						<NavDropdown
							className="ml-5"
							title={<Globe className="fs-5" />}
							id="basic-nav-dropdown"
						>
							<NavDropdown.Item
								onClick={onChangeLanguage('pl')}
								active={isActive('pl')}
							>
								{t('language.polish')}
							</NavDropdown.Item>
							<NavDropdown.Item
								onClick={onChangeLanguage('en')}
								active={isActive('en')}
							>
								{t('language.english')}
							</NavDropdown.Item>
						</NavDropdown>
						<Nav.Link href="#login">{t('domain.login')}</Nav.Link>
					</div>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default NavigationBar;
