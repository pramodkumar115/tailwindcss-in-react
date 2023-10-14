import React, { useEffect, useState } from "react"
import { createRoot } from "react-dom/client";

export interface NotificationConfig {
    type?: 'success' | 'error' | 'info' | 'warning' | 'default',
    closeIcon?: boolean,
    duration?: number,
    autoClose?: boolean,
    title?: string,
    placement?: 'top-left' | 'top-center' | 'top-right' | 'center'
    | 'bottom-left' | 'bottom-center' | 'bottom-right'
}
export const notifyMessage = (message: string, config?: NotificationConfig) => {
    const placement = config?.placement ?? 'top-right';
    const autoClose = config?.autoClose ?? true;
    let notificationContainer = document.getElementById(`notification_${placement}`);

    if (!notificationContainer) {
        notificationContainer = document.createElement('div');
        notificationContainer.setAttribute("id", `notification_${placement}`);
        notificationContainer.setAttribute("class", `absolute p-4 
        ${placementClassMap[placement].join(" ")}`)
        document.body?.append(notificationContainer);
    }
    // Create notification Element
    let notificationEl = document.createElement("div");
    const notificationId = `notification_${placement}_${notificationContainer?.childElementCount}`;
    notificationEl.setAttribute("id", notificationId)

    notificationContainer.appendChild(notificationEl);

    createRoot(notificationEl).render(
        <Notification message={message}
            config={config} notificationId={notificationId} autoClose={autoClose}/>);
    if (autoClose) {
        setTimeout(() => {
            removeNotification(placement, notificationId);
        }, (config?.duration ?? 5) * 1000);
    }
}

const removeNotification = (placement: string, notificationId: string) => {
    const notifyEl = document.getElementById(notificationId);
    if (notifyEl) {
        notifyEl.classList.add('slide-out-right');
        setTimeout(() => notifyEl.remove(), 1000);
    }
    const el = document.getElementById(`notification_${placement}`);
    if (el?.childElementCount === 0) {
        el.remove();
    }
}

const typeColorMap = {
    success: { color: 'bg-green-800', progressBar: 'bg-green-900' },
    error: { color: 'bg-red-700', progressBar: 'bg-red-800' },
    info: { color: 'bg-blue-500', progressBar: 'bg-blue-700' },
    warning: { color: 'bg-orange-600', progressBar: 'bg-orange-700' },
    default: { color: 'bg-black', progressBar: 'bg-gray-600' },
}

const placementClassMap = {
    'top-left': ['top-0', 'left-0'],
    'top-center': ['top-0', 'left-1/2', '-translate-x-1/2'],
    'top-right': ['top-0', 'right-0'],
    'center': ['top-1/2', 'left-1/2', '-translate-x-1/2', '-translate-y-1/2'],
    'bottom-left': ['bottom-0', 'left-0'],
    'bottom-center': ['bottom-0', 'left-1/2', '-translate-x-1/2'],
    'bottom-right': ['bottom-0', 'right-0'],
}

const Notification: React.FC<{ message: string, config?: NotificationConfig, 
    notificationId: string, autoClose: boolean }>
    = ({ message, config, notificationId, autoClose }) => {
        const [progressWidth, setProgressWidth] = useState(0);
        const [duration, setDuration] = useState(0);
        const type = config?.type ?? 'default';
        const title = config?.title ?? '';
        useEffect(() => {
            setDuration(config?.duration ? config?.duration * 1000 : 5000);
        }, []);

        useEffect(() => {
            if (duration > 0) {
                let width = 0;
                const interval = setInterval(() => {
                    setProgressWidth(++width);
                    if (width >= 100) {
                        clearInterval(interval);
                    }
                }, duration / 100);
            }
        }, [duration]);


        const getStyleClasses = () => {
            const classNames = [, 
                'rounded-xl', 'm-3', 'text-white', 'w-80', 'h-fit', 'shadow-2xl', 'slide-in-right'];
            classNames.push(typeColorMap[type].color);
            return Array.from(new Set(classNames)).join(" ")
        }
        return (
            <div className={getStyleClasses()}>
                <div className={`border-b font-bold border-b-white p-3 flex 
                justify-between`}>
                    <span>{(title).toLocaleUpperCase()}</span>
                    {(config?.closeIcon ?? true) && <span className={"cursor-pointer"}
                        onClick={() => removeNotification(config?.placement ?? 'top-right', notificationId)}>&#x2715;</span>}
                </div>
                <div className={'p-3'}>
                    <span>{message}</span>
                    {autoClose && <div className="w-full my-2 bg-gray-300 border border-gray-400 rounded-full">
                        <div className={`h-2 rounded-full ${typeColorMap[type].progressBar}`}
                            style={{
                                width: `${progressWidth}%`, transition: `width ${duration / 1000 / 100}s ease`
                            }}></div>
                    </div>}
                </div>

            </div>
        )
    };