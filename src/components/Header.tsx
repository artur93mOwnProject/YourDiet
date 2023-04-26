import i18next from 'i18next';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Globe } from 'react-bootstrap-icons';
import { useTranslation } from 'react-i18next';

const NavigationBar = () => {
	const { t } = useTranslation();

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
				Your Diet
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav" className="px-3">
				<Nav>
					<Nav.Link href="#home">{t('home.page')}</Nav.Link>
					<Nav.Link href="#link">Link</Nav.Link>

					<NavDropdown
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
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default NavigationBar;
