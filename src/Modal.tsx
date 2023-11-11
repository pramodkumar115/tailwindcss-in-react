import React, { ReactNode, useMemo } from "react";

const Modal = ({ show, children, size }: { show: boolean, children: ReactNode | any, size: 'lg' | 'md' | 'sm' }) => {

    const getWidth = useMemo(() => {
        if (size === 'lg') return 'w-11/12 md:11/12 lg:w-11/12';
        if (size === 'md') return 'w-11/12 md:8/12 lg:w-1/2';
        if (size === 'sm') return 'w-11/12 md:1/2 lg:w-1/4';
    }, [size])

    return <>{show && <div className={"flex justify-center items-center fixed top-0 w-screen h-screen bg-gray-500 bg-opacity-50"}>
        <div className={`min-h-[400px] ${getWidth} bg-white`}>
            {children}
        </div>
    </div>}</>
}

const Header = ({children}: {children: ReactNode | any}) => {
    return <div className={"p-2 text-[20px] font-bold border-b border-b-gray-500"}>
        {children}
</div>
}

const Content = ({children}: {children: ReactNode | any}) => {
    return <div className={"p-2 min-h-[300px] overflow-auto"}>
        {children}
</div>
}

const Footer = ({children}: {children: ReactNode | any}) => {
    return <div className={"p-2 border-t border-t-gray-500"}>
    {children}
</div>
}

Modal.Header = Header;
Modal.Content = Content;
Modal.Footer = Footer;

export default Modal;