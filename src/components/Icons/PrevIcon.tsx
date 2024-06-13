interface PrevProps {
    className?: string;
}

export const PrevIcon = ({ className }: PrevProps) => (
    <svg
        className={className}
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink">
        <defs>
            <clipPath id="clip1_11">
                <rect
                    id="Icon / Calendar / Prev"
                    width="16.000000"
                    height="16.000000"
                    fill="white"
                    fillOpacity="0"
                />
            </clipPath>
        </defs>
        <rect
            id="Icon / Calendar / Prev"
            width="16.000000"
            height="16.000000"
            fill="#FFFFFF"
            fillOpacity="0"
        />
        <g clipPath="url(#clip1_11)">
            <path
                id="Vector"
                d="M11.72 12L12.66 11.06L9.61 8L12.66 4.94L11.72 4L7.72 8L11.72 12Z"
                fill="#000000"
                fillOpacity="1.000000"
                fillRule="nonzero"
            />
            <path
                id="Vector"
                d="M7.33 12L8.27 11.06L5.21 8L8.27 4.94L7.33 4L3.33 8L7.33 12Z"
                fill="#000000"
                fillOpacity="1.000000"
                fillRule="nonzero"
            />
        </g>
    </svg>
);
