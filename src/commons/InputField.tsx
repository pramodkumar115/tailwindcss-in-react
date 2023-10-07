import React from "react";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
    rows?: number,
    isLabelInline?: boolean,
    label?: string | React.ReactElement,
    displayType?: 'bottom-border' | 'full-border',
    className?: string
}

const InputField: React.FC<InputFieldProps> = ({ rows, isLabelInline = false,
    label, displayType = "full-border", className, ...props }) => {

    const getLabelClass = () => {
        const labelClassNames = ["py-1", "font-bold"];
        if (!isLabelInline) {
            labelClassNames.push("block");
        } else {
            labelClassNames.push("inline", "pr-1", 'w-auto');
        }
        return Array.from(new Set([...labelClassNames])).join(" ")
    }
    const getFieldClass = () => {
        const fieldClassNames = ["p-1", "focus:outline-none"];
        if (!isLabelInline) {
            fieldClassNames.push("block", 'w-full');
        } else {
            fieldClassNames.push("inline", "pr-1", 'w-auto');
        }
        if (displayType === 'full-border') {
            fieldClassNames.push("border", 'border-black');
        } else {
            fieldClassNames.push("border-b", 'border-b-black');
        }
        if (className && className !== '') {
            fieldClassNames.push(...(className.split(",")))
        }
        // Removing duplicates by converting into Set
        return Array.from(new Set([...fieldClassNames])).join(" ");
    }

    return <div className={"w-full m-1"}>
        <label className={getLabelClass()}>{label}</label>
        {rows != null && rows > 0 ? <textarea rows={rows} className={getFieldClass()} {...props} ></textarea>
            :
            <input className={getFieldClass()} {...props}></input>
        }

    </div>
}

export default InputField;