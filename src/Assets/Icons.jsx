import { useLocation } from "react-router";


export const DownArrow = () => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.00003 9L10.5834 13.5833L15.1667 9" stroke="#919EAB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};

export const EyeOff = () => {

    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.5299 9.47004L9.46992 14.53C8.81992 13.88 8.41992 12.99 8.41992 12C8.41992 10.02 10.0199 8.42004 11.9999 8.42004C12.9899 8.42004 13.8799 8.82004 14.5299 9.47004Z" stroke="#918EAF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M17.8201 5.76998C16.0701 4.44998 14.0701 3.72998 12.0001 3.72998C8.47009 3.72998 5.18009 5.80998 2.89009 9.40998C1.99009 10.82 1.99009 13.19 2.89009 14.6C3.68009 15.84 4.60009 16.91 5.60009 17.77" stroke="#918EAF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8.41992 19.5301C9.55992 20.0101 10.7699 20.2701 11.9999 20.2701C15.5299 20.2701 18.8199 18.1901 21.1099 14.5901C22.0099 13.1801 22.0099 10.8101 21.1099 9.40005C20.7799 8.88005 20.4199 8.39005 20.0499 7.93005" stroke="#918EAF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M15.5099 12.7C15.2499 14.11 14.0999 15.26 12.6899 15.52" stroke="#918EAF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9.47 14.53L2 22" stroke="#918EAF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M22 2L14.53 9.47" stroke="#918EAF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    );
};

export const EyeOn = () => {

    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.5799 12C15.5799 13.98 13.9799 15.58 11.9999 15.58C10.0199 15.58 8.41992 13.98 8.41992 12C8.41992 10.02 10.0199 8.42004 11.9999 8.42004C13.9799 8.42004 15.5799 10.02 15.5799 12Z" stroke="#918EAF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12.0001 20.27C15.5301 20.27 18.8201 18.19 21.1101 14.59C22.0101 13.18 22.0101 10.81 21.1101 9.39997C18.8201 5.79997 15.5301 3.71997 12.0001 3.71997C8.47009 3.71997 5.18009 5.79997 2.89009 9.39997C1.99009 10.81 1.99009 13.18 2.89009 14.59C5.18009 18.19 8.47009 20.27 12.0001 20.27Z" stroke="#918EAF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    );
};

export const Dashboard = () => {
    const { pathname } = useLocation();

    return (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.1667 7.58081V3.87748C20.1667 2.41998 19.58 1.83331 18.1225 1.83331H14.4192C12.9617 1.83331 12.375 2.41998 12.375 3.87748V7.58081C12.375 9.03831 12.9617 9.62498 14.4192 9.62498H18.1225C19.58 9.62498 20.1667 9.03831 20.1667 7.58081Z" stroke={pathname === "/dashboard" ? "#7635DC" : "#918EAF"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9.62516 7.80998V3.64831C9.62516 2.35581 9.0385 1.83331 7.581 1.83331H3.87766C2.42016 1.83331 1.8335 2.35581 1.8335 3.64831V7.80081C1.8335 9.10248 2.42016 9.61581 3.87766 9.61581H7.581C9.0385 9.62498 9.62516 9.10248 9.62516 7.80998Z" stroke={pathname === "/dashboard" ? "#7635DC" : "#918EAF"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9.62516 18.1225V14.4192C9.62516 12.9617 9.0385 12.375 7.581 12.375H3.87766C2.42016 12.375 1.8335 12.9617 1.8335 14.4192V18.1225C1.8335 19.58 2.42016 20.1667 3.87766 20.1667H7.581C9.0385 20.1667 9.62516 19.58 9.62516 18.1225Z" stroke={pathname === "/dashboard" ? "#7635DC" : "#918EAF"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M13.75 14.2083H19.25" stroke={pathname === "/dashboard" ? "#7635DC" : "#918EAF"} strokeWidth="1.5" strokeLinecap="round" />
            <path d="M13.75 17.875H19.25" stroke={pathname === "/dashboard" ? "#7635DC" : "#918EAF"} strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    );
};
export const AddBook = () => {
    const { pathname } = useLocation();

    return (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_58_1719)">
                <path d="M7.3335 14.6666H4.97766C2.8785 14.6666 1.8335 13.6216 1.8335 11.5225V4.97748C1.8335 2.87831 2.8785 1.83331 4.97766 1.83331H9.16683C11.266 1.83331 12.311 2.87831 12.311 4.97748" stroke={pathname === "/add_book" ? "#7635DC" : "#918EAF"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M17.0223 20.1666H12.8331C10.734 20.1666 9.68896 19.1216 9.68896 17.0225V10.4775C9.68896 8.37831 10.734 7.33331 12.8331 7.33331H17.0223C19.1215 7.33331 20.1665 8.37831 20.1665 10.4775V17.0225C20.1665 19.1216 19.1215 20.1666 17.0223 20.1666Z" stroke={pathname === "/add_book" ? "#7635DC" : "#918EAF"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M13.6309 13.75H16.6192" stroke={pathname === "/add_book" ? "#7635DC" : "#918EAF"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M15.125 15.2442V12.2559" stroke={pathname === "/add_book" ? "#7635DC" : "#918EAF"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
                <clipPath id="clip0_58_1719">
                    <rect width="22" height="22" fill="white" />
                </clipPath>
            </defs>
        </svg>

    );
};
export const BookList = () => {
    const { pathname } = useLocation();

    return (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.1668 15.345V4.28084C20.1668 3.18084 19.2685 2.36501 18.1777 2.45668H18.1227C16.1977 2.62168 13.2735 3.60251 11.6418 4.62918L11.486 4.73001C11.2202 4.89501 10.7802 4.89501 10.5143 4.73001L10.2852 4.59251C8.6535 3.57501 5.7385 2.60334 3.8135 2.44751C2.72266 2.35584 1.8335 3.18084 1.8335 4.27168V15.345C1.8335 16.225 2.5485 17.05 3.4285 17.16L3.69433 17.1967C5.6835 17.4625 8.75433 18.4708 10.5143 19.4333L10.551 19.4517C10.7985 19.5892 11.1927 19.5892 11.431 19.4517C13.191 18.48 16.271 17.4625 18.2693 17.1967L18.5718 17.16C19.4518 17.05 20.1668 16.225 20.1668 15.345Z" stroke={pathname === "/book_list" ? "#7635DC" : "#918EAF"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M11 5.03247V18.7825" stroke={pathname === "/book_list" ? "#7635DC" : "#918EAF"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7.104 7.78247H5.0415" stroke={pathname === "/book_list" ? "#7635DC" : "#918EAF"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7.7915 10.5325H5.0415" stroke={pathname === "/book_list" ? "#7635DC" : "#918EAF"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};
export const Invoice = () => {
    const { pathname } = useLocation();

    return (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.1665 5.49998V7.71831C20.1665 9.16664 19.2498 10.0833 17.8015 10.0833H14.6665V3.67581C14.6665 2.65831 15.5007 1.83331 16.5182 1.83331C17.5173 1.84248 18.434 2.24581 19.094 2.90581C19.754 3.57498 20.1665 4.49165 20.1665 5.49998Z" stroke={pathname === "/invoice" ? "#7635DC" : "#918EAF"} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M1.8335 6.41665V19.25C1.8335 20.0108 2.69516 20.4416 3.30016 19.9833L4.86766 18.81C5.23433 18.535 5.74766 18.5716 6.07766 18.9016L7.59933 20.4325C7.95683 20.79 8.5435 20.79 8.901 20.4325L10.441 18.8925C10.7618 18.5716 11.2752 18.535 11.6327 18.81L13.2002 19.9833C13.8052 20.4325 14.6668 20.0016 14.6668 19.25V3.66665C14.6668 2.65831 15.4918 1.83331 16.5002 1.83331H6.41683H5.50016C2.75016 1.83331 1.8335 3.47415 1.8335 5.49998V6.41665Z" stroke={pathname === "/invoice" ? "#7635DC" : "#918EAF"} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8.25 11.9258H11" stroke={pathname === "/invoice" ? "#7635DC" : "#918EAF"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8.25 8.25916H11" stroke={pathname === "/invoice" ? "#7635DC" : "#918EAF"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M5.49609 11.9167H5.50433" stroke={pathname === "/invoice" ? "#7635DC" : "#918EAF"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M5.49609 8.25H5.50433" stroke={pathname === "/invoice" ? "#7635DC" : "#918EAF"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};
export const Sell = () => {
    return (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.82236 14.025L7.97486 18.1775C9.67986 19.8825 12.4482 19.8825 14.1624 18.1775L18.1865 14.1534C19.8915 12.4484 19.8915 9.68005 18.1865 7.96588L14.0249 3.82255C13.154 2.95171 11.9532 2.48421 10.7249 2.54838L6.14153 2.76838C4.30819 2.85088 2.85069 4.30838 2.75903 6.13255L2.53903 10.7159C2.48403 11.9534 2.95153 13.1542 3.82236 14.025Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8.70817 11C9.97382 11 10.9998 9.97401 10.9998 8.70835C10.9998 7.4427 9.97382 6.41669 8.70817 6.41669C7.44252 6.41669 6.4165 7.4427 6.4165 8.70835C6.4165 9.97401 7.44252 11 8.70817 11Z" stroke="white" strokeLinecap="round" />
        </svg>
    );
};