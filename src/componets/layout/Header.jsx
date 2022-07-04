import React from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../GlobalContext";
import dataSections from "../../data/dataSections";

function Header() {
    const [pesquisa, setPesquisa] = React.useState("");
    const { setNavFillter } = React.useContext(GlobalContext);

    function handleClickNav(event) {
        setNavFillter(event.target.innerHTML);
    }

    function navigationProduct(event) {
        setPesquisa(event.target.value);
    }

    function limparPesquisa() {
        setTimeout(() => {
            setPesquisa("");
        }, 1000);
    }

    return (
        <header className="header">
            <nav className="navigation-mobile wrapper">
                <svg
                    width="18"
                    height="6"
                    viewBox="0 0 18 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M1.49999 2.16667H16.5C16.721 2.16667 16.933 2.07887 17.0892 1.92259C17.2455 1.76631 17.3333 1.55435 17.3333 1.33333C17.3333 1.11232 17.2455 0.900358 17.0892 0.744078C16.933 0.587798 16.721 0.5 16.5 0.5H1.49999C1.27898 0.5 1.06701 0.587798 0.910734 0.744078C0.754454 0.900358 0.666656 1.11232 0.666656 1.33333C0.666656 1.55435 0.754454 1.76631 0.910734 1.92259C1.06701 2.07887 1.27898 2.16667 1.49999 2.16667ZM16.5 3.83333H1.49999C1.27898 3.83333 1.06701 3.92113 0.910734 4.07741C0.754454 4.23369 0.666656 4.44565 0.666656 4.66667C0.666656 4.88768 0.754454 5.09964 0.910734 5.25592C1.06701 5.4122 1.27898 5.5 1.49999 5.5H16.5C16.721 5.5 16.933 5.4122 17.0892 5.25592C17.2455 5.09964 17.3333 4.88768 17.3333 4.66667C17.3333 4.44565 17.2455 4.23369 17.0892 4.07741C16.933 3.92113 16.721 3.83333 16.5 3.83333Z"
                        fill="black"
                    />
                </svg>
                <h1 className="header-title">Faithfull The Brand</h1>
                <div>
                    <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M17.0916 15.9083L14 12.8417C15.2001 11.3454 15.7812 9.44609 15.624 7.53443C15.4667 5.62276 14.583 3.844 13.1546 2.56388C11.7261 1.28377 9.86149 0.599604 7.94408 0.652071C6.02668 0.704538 4.20225 1.48965 2.84593 2.84596C1.48962 4.20228 0.704507 6.02671 0.65204 7.94411C0.599573 9.86152 1.28374 11.7262 2.56385 13.1546C3.84397 14.5831 5.62273 15.4668 7.5344 15.624C9.44606 15.7813 11.3453 15.2001 12.8416 14L15.9083 17.0667C15.9858 17.1448 16.078 17.2068 16.1795 17.2491C16.281 17.2914 16.39 17.3132 16.5 17.3132C16.61 17.3132 16.7189 17.2914 16.8205 17.2491C16.922 17.2068 17.0142 17.1448 17.0916 17.0667C17.2418 16.9113 17.3258 16.7036 17.3258 16.4875C17.3258 16.2714 17.2418 16.0637 17.0916 15.9083ZM8.16665 14C7.01292 14 5.88511 13.6579 4.92582 13.0169C3.96653 12.3759 3.21886 11.4649 2.77735 10.399C2.33584 9.3331 2.22032 8.16021 2.4454 7.02865C2.67048 5.8971 3.22605 4.8577 4.04186 4.04189C4.85767 3.22608 5.89707 2.67051 7.02862 2.44543C8.16018 2.22035 9.33307 2.33587 10.399 2.77738C11.4649 3.21889 12.3759 3.96657 13.0169 4.92585C13.6579 5.88514 14 7.01295 14 8.16668C14 9.71377 13.3854 11.1975 12.2914 12.2915C11.1975 13.3854 9.71374 14 8.16665 14Z"
                            fill="black"
                        />
                    </svg>
                    <svg
                        width="14"
                        height="18"
                        viewBox="0 0 14 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M12.8333 4.83332H10.3333V3.99999C10.3333 3.11594 9.98212 2.26809 9.357 1.64297C8.73188 1.01785 7.88403 0.666656 6.99998 0.666656C6.11592 0.666656 5.26808 1.01785 4.64296 1.64297C4.01784 2.26809 3.66665 3.11594 3.66665 3.99999V4.83332H1.16665C0.945633 4.83332 0.733671 4.92112 0.577391 5.0774C0.421111 5.23368 0.333313 5.44564 0.333313 5.66666V14.8333C0.333313 15.4964 0.596705 16.1323 1.06555 16.6011C1.53439 17.0699 2.17027 17.3333 2.83331 17.3333H11.1666C11.8297 17.3333 12.4656 17.0699 12.9344 16.6011C13.4033 16.1323 13.6666 15.4964 13.6666 14.8333V5.66666C13.6666 5.44564 13.5788 5.23368 13.4226 5.0774C13.2663 4.92112 13.0543 4.83332 12.8333 4.83332ZM5.33331 3.99999C5.33331 3.55796 5.50891 3.13404 5.82147 2.82148C6.13403 2.50892 6.55795 2.33332 6.99998 2.33332C7.44201 2.33332 7.86593 2.50892 8.17849 2.82148C8.49105 3.13404 8.66665 3.55796 8.66665 3.99999V4.83332H5.33331V3.99999ZM12 14.8333C12 15.0543 11.9122 15.2663 11.7559 15.4226C11.5996 15.5789 11.3877 15.6667 11.1666 15.6667H2.83331C2.6123 15.6667 2.40034 15.5789 2.24406 15.4226C2.08778 15.2663 1.99998 15.0543 1.99998 14.8333V6.49999H3.66665V7.33332C3.66665 7.55434 3.75444 7.7663 3.91072 7.92258C4.067 8.07886 4.27897 8.16666 4.49998 8.16666C4.72099 8.16666 4.93295 8.07886 5.08923 7.92258C5.24551 7.7663 5.33331 7.55434 5.33331 7.33332V6.49999H8.66665V7.33332C8.66665 7.55434 8.75444 7.7663 8.91072 7.92258C9.067 8.07886 9.27896 8.16666 9.49998 8.16666C9.72099 8.16666 9.93295 8.07886 10.0892 7.92258C10.2455 7.7663 10.3333 7.55434 10.3333 7.33332V6.49999H12V14.8333Z"
                            fill="black"
                        />
                    </svg>
                </div>
            </nav>

            <nav className="navigation-desktop">
                <header className="header-desktop wrapper-desktop">
                    <h2 className="logo-desktop">F</h2>
                    <h1 className="header-title-desktop">
                        Faithfull The Brand
                    </h1>
                    <div className="locate">
                        <span>
                            United Kingdom{" "}
                            <svg
                                width="10"
                                height="6"
                                viewBox="0 0 10 6"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M9.16664 0.64168C9.01051 0.486471 8.7993 0.399353 8.57914 0.399353C8.35899 0.399353 8.14778 0.486471 7.99164 0.64168L4.99998 3.59168L2.04998 0.64168C1.89384 0.486471 1.68263 0.399353 1.46248 0.399353C1.24232 0.399353 1.03111 0.486471 0.874978 0.64168C0.796871 0.719149 0.734875 0.811317 0.692568 0.912866C0.650261 1.01442 0.628479 1.12334 0.628479 1.23335C0.628479 1.34336 0.650261 1.45228 0.692568 1.55383C0.734875 1.65538 0.796871 1.74754 0.874978 1.82501L4.40831 5.35835C4.48578 5.43645 4.57795 5.49845 4.6795 5.54076C4.78105 5.58306 4.88997 5.60485 4.99998 5.60485C5.10999 5.60485 5.21891 5.58306 5.32046 5.54076C5.42201 5.49845 5.51417 5.43645 5.59164 5.35835L9.16664 1.82501C9.24475 1.74754 9.30675 1.65538 9.34905 1.55383C9.39136 1.45228 9.41314 1.34336 9.41314 1.23335C9.41314 1.12334 9.39136 1.01442 9.34905 0.912866C9.30675 0.811317 9.24475 0.719149 9.16664 0.64168Z"
                                    fill="black"
                                />
                            </svg>
                        </span>
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M12.0917 9.59166C12.9087 8.94887 13.505 8.06743 13.7977 7.06994C14.0904 6.07246 14.0649 5.00855 13.7248 4.02622C13.3847 3.04388 12.7469 2.19199 11.9001 1.58904C11.0532 0.986091 10.0395 0.662079 9 0.662079C7.96045 0.662079 6.94676 0.986091 6.09994 1.58904C5.25312 2.19199 4.61528 3.04388 4.27517 4.02622C3.93506 5.00855 3.90959 6.07246 4.2023 7.06994C4.49501 8.06743 5.09134 8.94887 5.90833 9.59166C4.5084 10.1525 3.2869 11.0828 2.37407 12.2833C1.46125 13.4837 0.8913 14.9094 0.724997 16.4083C0.712959 16.5178 0.722594 16.6285 0.753352 16.7342C0.784109 16.8399 0.835387 16.9385 0.904257 17.0244C1.04335 17.1979 1.24565 17.309 1.46666 17.3333C1.68768 17.3576 1.9093 17.2932 2.08277 17.1541C2.25624 17.015 2.36735 16.8127 2.39166 16.5917C2.57465 14.9627 3.3514 13.4582 4.57351 12.3657C5.79562 11.2731 7.37741 10.6692 9.01667 10.6692C10.6559 10.6692 12.2377 11.2731 13.4598 12.3657C14.6819 13.4582 15.4587 14.9627 15.6417 16.5917C15.6643 16.7964 15.762 16.9855 15.9159 17.1225C16.0698 17.2595 16.269 17.3346 16.475 17.3333H16.5667C16.7851 17.3082 16.9848 17.1977 17.1221 17.026C17.2595 16.8543 17.3234 16.6353 17.3 16.4167C17.1329 14.9135 16.5599 13.4841 15.6424 12.2818C14.7249 11.0795 13.4974 10.1496 12.0917 9.59166ZM9 8.99999C8.34073 8.99999 7.69626 8.8045 7.1481 8.43822C6.59993 8.07195 6.17269 7.55136 5.9204 6.94227C5.66811 6.33318 5.6021 5.66296 5.73071 5.01636C5.85933 4.36975 6.1768 3.77581 6.64297 3.30964C7.10915 2.84346 7.70309 2.52599 8.3497 2.39737C8.9963 2.26876 9.66652 2.33477 10.2756 2.58706C10.8847 2.83935 11.4053 3.26659 11.7716 3.81476C12.1378 4.36292 12.3333 5.00739 12.3333 5.66666C12.3333 6.55071 11.9821 7.39856 11.357 8.02368C10.7319 8.6488 9.88405 8.99999 9 8.99999Z"
                                fill="black"
                            />
                        </svg>
                    </div>
                </header>
                <nav className="navigation-list ">
                    <ul className="wrapper-desktop">
                        <li>
                            <Link
                                to="/"
                                className="Link"
                                onClick={handleClickNav}
                            >
                                popular
                            </Link>
                        </li>
                        {dataSections.map((section) => (
                            <li
                                style={{ cursor: "pointer" }}
                                key={section}
                                onClick={handleClickNav}
                            >
                                {section}
                            </li>
                        ))}
                        <li>
                            <Link to="/sale" className="Link">
                                Sale
                            </Link>
                        </li>
                        <li className="search">
                            <span>
                                <input
                                    type="text"
                                    placeholder="SEARCH"
                                    id="inp-pesquisa"
                                    value={pesquisa}
                                    onChange={navigationProduct}
                                />
                            </span>{" "}
                            <a
                                href={`#${pesquisa}`}
                                onClick={() => limparPesquisa()}
                            >
                                <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 18 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M17.0917 15.9083L14 12.8417C15.2001 11.3454 15.7813 9.44609 15.624 7.53443C15.4668 5.62276 14.5831 3.844 13.1546 2.56388C11.7262 1.28377 9.86152 0.599604 7.94411 0.652071C6.02671 0.704538 4.20228 1.48965 2.84596 2.84596C1.48965 4.20228 0.704538 6.02671 0.652071 7.94411C0.599604 9.86152 1.28377 11.7262 2.56388 13.1546C3.844 14.5831 5.62276 15.4668 7.53443 15.624C9.44609 15.7813 11.3454 15.2001 12.8417 14L15.9083 17.0667C15.9858 17.1448 16.078 17.2068 16.1795 17.2491C16.2811 17.2914 16.39 17.3132 16.5 17.3132C16.61 17.3132 16.7189 17.2914 16.8205 17.2491C16.922 17.2068 17.0142 17.1448 17.0917 17.0667C17.2419 16.9113 17.3258 16.7036 17.3258 16.4875C17.3258 16.2714 17.2419 16.0637 17.0917 15.9083ZM8.16668 14C7.01295 14 5.88514 13.6579 4.92585 13.0169C3.96657 12.3759 3.21889 11.4649 2.77738 10.399C2.33587 9.3331 2.22035 8.16021 2.44543 7.02865C2.67051 5.8971 3.22608 4.8577 4.04189 4.04189C4.8577 3.22608 5.8971 2.67051 7.02865 2.44543C8.16021 2.22035 9.3331 2.33587 10.399 2.77738C11.4649 3.21889 12.3759 3.96657 13.0169 4.92585C13.6579 5.88514 14 7.01295 14 8.16668C14 9.71377 13.3854 11.1975 12.2915 12.2915C11.1975 13.3854 9.71377 14 8.16668 14Z"
                                        fill="black"
                                    />
                                </svg>
                            </a>
                        </li>
                        <li className="buy">
                            <Link to="cart" className="Link">
                                Cart{" "}
                                <svg
                                    width="14"
                                    height="18"
                                    viewBox="0 0 14 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M12.8333 4.83332H10.3333V3.99999C10.3333 3.11594 9.98212 2.26809 9.357 1.64297C8.73188 1.01785 7.88403 0.666656 6.99998 0.666656C6.11592 0.666656 5.26808 1.01785 4.64296 1.64297C4.01784 2.26809 3.66665 3.11594 3.66665 3.99999V4.83332H1.16665C0.945633 4.83332 0.733671 4.92112 0.577391 5.0774C0.421111 5.23368 0.333313 5.44564 0.333313 5.66666V14.8333C0.333313 15.4964 0.596705 16.1323 1.06555 16.6011C1.53439 17.0699 2.17027 17.3333 2.83331 17.3333H11.1666C11.8297 17.3333 12.4656 17.0699 12.9344 16.6011C13.4033 16.1323 13.6666 15.4964 13.6666 14.8333V5.66666C13.6666 5.44564 13.5788 5.23368 13.4226 5.0774C13.2663 4.92112 13.0543 4.83332 12.8333 4.83332ZM5.33331 3.99999C5.33331 3.55796 5.50891 3.13404 5.82147 2.82148C6.13403 2.50892 6.55795 2.33332 6.99998 2.33332C7.44201 2.33332 7.86593 2.50892 8.17849 2.82148C8.49105 3.13404 8.66665 3.55796 8.66665 3.99999V4.83332H5.33331V3.99999ZM12 14.8333C12 15.0543 11.9122 15.2663 11.7559 15.4226C11.5996 15.5789 11.3877 15.6667 11.1666 15.6667H2.83331C2.6123 15.6667 2.40034 15.5789 2.24406 15.4226C2.08778 15.2663 1.99998 15.0543 1.99998 14.8333V6.49999H3.66665V7.33332C3.66665 7.55434 3.75444 7.7663 3.91072 7.92258C4.067 8.07886 4.27897 8.16666 4.49998 8.16666C4.72099 8.16666 4.93295 8.07886 5.08923 7.92258C5.24551 7.7663 5.33331 7.55434 5.33331 7.33332V6.49999H8.66665V7.33332C8.66665 7.55434 8.75444 7.7663 8.91072 7.92258C9.067 8.07886 9.27896 8.16666 9.49998 8.16666C9.72099 8.16666 9.93295 8.07886 10.0892 7.92258C10.2455 7.7663 10.3333 7.55434 10.3333 7.33332V6.49999H12V14.8333Z"
                                        fill="black"
                                    />
                                </svg>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </nav>
        </header>
    );
}

export default Header;
