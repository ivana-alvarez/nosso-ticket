import { TIconProps } from './TIconProps'

export default function LogoLight({ className = '' }: TIconProps) {
    return (
        <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.3667 11.0334L15 6.66669H35V28.3333C35 31.1 32.7667 33.3333 30 33.3333H13.3334C11.5 33.3333 10 31.8333 10 30V25H14.9834V21.2167L18.3334 20.6834V25H28.3334V28.3333C28.3334 29.25 29.0834 30 30 30C30.9167 30 31.6667 29.25 31.6667 28.3333V10H18.3334V11.0334H15.3667Z"
                fill="#2196F3"
            />
            <path
                d="M21.6666 13.0523L15.4155 20L11.6666 15.8334L12.9133 14.4477L15.4155 17.2288L20.4199 11.6667L21.6666 13.0523Z"
                fill="#2196F3"
            />
        </svg>
    )
}
