interface ClearProps {
    className?: string;
}

export const ClearIcon = ({ className }: ClearProps) => (
    <svg
        className={className}
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink">
        <defs>
            <clipPath id="clip1_9">
                <rect
                    id="Icon / Field / Clear"
                    width="16"
                    height="16"
                    fill="white"
                    fillOpacity="0"
                />
            </clipPath>
        </defs>
        <rect
            id="Icon / Field / Clear"
            width="16"
            height="16"
            fill="#FFFFFF"
            fillOpacity="0"
        />
        <g clipPath="url(#clip1_9)">
            <path
                id="Vector"
                d="M12.98 3.04C10.25 0.31 5.77 0.31 3.04 3.04C0.31 5.76 0.31 10.23 3.04 12.95C5.77 15.68 10.18 15.68 12.91 12.95C15.64 10.23 15.71 5.76 12.98 3.04ZM9.97 10.93L8.01 8.97L6.05 10.93L5.07 9.95L7.03 8L5.07 6.04L6.05 5.06L8.01 7.02L9.97 5.06L10.95 6.04L8.99 8L10.95 9.95L9.97 10.93Z"
                fill="#AAAAAA"
                fillOpacity="1.000000"
                fillRule="nonzero"
            />
        </g>
    </svg>
);
