import React, {useState} from 'react';
import styles from './index.module.scss';
import arrow from "../../assets/icon-24.svg"

interface Option {
    label: string;
    value: string;
}

interface CustomDropdownProps {
    label: string;
    options: Option[];
    selected: string[];
    onChange: (values: string[]) => void;
}

export const CustomDropdown: React.FC<CustomDropdownProps> = ({
                                                                  label,
                                                                  options,
                                                                  selected,
                                                                  onChange,
                                                              }) => {
    const [open, setOpen] = useState(false);

    const toggleValue = (value: string) => {
        if (selected.includes(value)) {
            onChange(selected.filter((v) => v !== value));
        } else {
            onChange([...selected, value]);
        }
    };

    const toggleAll = () => {
        if (selected.length === options.length) {
            onChange([]);
        } else {
            onChange(options.map((o) => o.value));
        }
    };

    return (
        <div className={styles.dropdown}>
            <button
                type="button"
                className={`${styles.toggle} ${open ? styles.open : ''}`}
                onClick={() => setOpen(!open)}
            >
                {label}
                <img src={arrow} alt="arrow"/>
            </button>

            {open && (
                <div className={styles.menu}>
                    <label>
                        <input
                            type="checkbox"
                            checked={selected.length === options.length}
                            onChange={toggleAll}
                        />
                        Выбрать всё
                    </label>
                    {options.map((opt) => (
                        <label key={opt.value}>
                            <input
                                type="checkbox"
                                checked={selected.includes(opt.value)}
                                onChange={() => toggleValue(opt.value)}
                            />
                            {opt.label}
                        </label>
                    ))}
                </div>
            )}
        </div>
    );
};
