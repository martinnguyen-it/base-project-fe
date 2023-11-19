import { ReactElement } from 'react';

export interface IProps {
    className?: string;
}

export const ExpandSidebarIcon = (): ReactElement => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-4 h-4 text-white"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
        />
    </svg>
);

export const CollapseSidebarIcon = (): ReactElement => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-4 h-4 text-white"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
        />
    </svg>
);

export const SettingIcon = (): ReactElement => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5"
    >
        <path
            fillRule="evenodd"
            d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.923-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z"
            clipRule="evenodd"
        />
    </svg>
);

export const DashboardIcon = () => (
    <svg
        aria-hidden="true"
        className="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
    </svg>
);

export const AddressesIcon = (): ReactElement => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5"
    >
        <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
        <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
    </svg>
);

export const TransactionsIcon = (): ReactElement => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5"
    >
        <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 01-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004zM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 01-.921.42z" />
        <path
            fillRule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v.816a3.836 3.836 0 00-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 01-.921-.421l-.879-.66a.75.75 0 00-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 001.5 0v-.81a4.124 4.124 0 001.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 00-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 00.933-1.175l-.415-.33a3.836 3.836 0 00-1.719-.755V6z"
            clipRule="evenodd"
        />
    </svg>
);

export const ChevronIcon = (): ReactElement => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-4 h-4 text-red-800"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
        />
    </svg>
);

export const CameraIcon = (): ReactElement => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6 text-gray-400"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
        />
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
        />
    </svg>
);

export const ClassifyIcon = (): ReactElement => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-3 h-3 text-white"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
        />
    </svg>
);

export const ImportIcon = (): ReactElement => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-4 h-4 text-white"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
        />
    </svg>
);

export const AddIcon = (): ReactElement => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-4 h-4 !text-white"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
        />
    </svg>
);

export const UploadIcon = ({
    className = 'text-white',
}: {
    className?: string;
}): ReactElement => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className={`w-4 h-4 ${className}`}
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
        />
    </svg>
);

export const ClearIcon = (): ReactElement => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-4 h-4"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
        />
    </svg>
);

export const LogOutIcon = (): ReactElement => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-4 h-4"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
        />
    </svg>
);

export const ArrowDownMenuIcon = ({
    active,
}: {
    active?: boolean;
}): ReactElement => (
    <svg
        className={`w-5 h-5 group-hover:text-white ${active && 'text-white'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
        ></path>
    </svg>
);

export const ArrowRightMenuIcon = (): ReactElement => (
    <svg
        className="w-5 h-5 text-gray-500 group-hover:text-white"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
        />
    </svg>
);

export const SubmitIcon = (): ReactElement => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-4 h-4 text-white"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15"
        />
    </svg>
);

export const ReportsIcon = (): ReactElement => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5"
    >
        <path
            fillRule="evenodd"
            d="M2.25 2.25a.75.75 0 000 1.5H3v10.5a3 3 0 003 3h1.21l-1.172 3.513a.75.75 0 001.424.474l.329-.987h8.418l.33.987a.75.75 0 001.422-.474l-1.17-3.513H18a3 3 0 003-3V3.75h.75a.75.75 0 000-1.5H2.25zm6.54 15h6.42l.5 1.5H8.29l.5-1.5zm8.085-8.995a.75.75 0 10-.75-1.299 12.81 12.81 0 00-3.558 3.05L11.03 8.47a.75.75 0 00-1.06 0l-3 3a.75.75 0 101.06 1.06l2.47-2.47 1.617 1.618a.75.75 0 001.146-.102 11.312 11.312 0 013.612-3.321z"
            clipRule="evenodd"
        />
    </svg>
);

export const HelpIcon = (): ReactElement => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5"
    >
        <path
            fillRule="evenodd"
            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 01-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 01-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 01-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584zM12 18a.75.75 0 100-1.5.75.75 0 000 1.5z"
            clipRule="evenodd"
        />
    </svg>
);

export const AssetsIcon = (): ReactElement => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-4 h-4"
    >
        <path
            fillRule="evenodd"
            d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
            clipRule="evenodd"
        />
        <path d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z" />
    </svg>
);

export const RevenueIcon = (): ReactElement => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-4 h-4"
    >
        <path
            fillRule="evenodd"
            d="M5.478 5.559A1.5 1.5 0 016.912 4.5H9A.75.75 0 009 3H6.912a3 3 0 00-2.868 2.118l-2.411 7.838a3 3 0 00-.133.882V18a3 3 0 003 3h15a3 3 0 003-3v-4.162c0-.299-.045-.596-.133-.882l-2.412-7.838A3 3 0 0017.088 3H15a.75.75 0 000 1.5h2.088a1.5 1.5 0 011.434 1.059l2.213 7.191H17.89a3 3 0 00-2.684 1.658l-.256.513a1.5 1.5 0 01-1.342.829h-3.218a1.5 1.5 0 01-1.342-.83l-.256-.512a3 3 0 00-2.684-1.658H3.265l2.213-7.191z"
            clipRule="evenodd"
        />
        <path
            fillRule="evenodd"
            d="M12 2.25a.75.75 0 01.75.75v6.44l1.72-1.72a.75.75 0 111.06 1.06l-3 3a.75.75 0 01-1.06 0l-3-3a.75.75 0 011.06-1.06l1.72 1.72V3a.75.75 0 01.75-.75z"
            clipRule="evenodd"
        />
    </svg>
);

export const ExpensesIcon = (): ReactElement => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-4 h-4"
    >
        <path
            fillRule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM9 7.5A.75.75 0 009 9h1.5c.98 0 1.813.626 2.122 1.5H9A.75.75 0 009 12h3.622a2.251 2.251 0 01-2.122 1.5H9a.75.75 0 00-.53 1.28l3 3a.75.75 0 101.06-1.06L10.8 14.988A3.752 3.752 0 0014.175 12H15a.75.75 0 000-1.5h-.825A3.733 3.733 0 0013.5 9H15a.75.75 0 000-1.5H9z"
            clipRule="evenodd"
        />
    </svg>
);

export const EquityIcon = (): ReactElement => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-4 h-4"
    >
        <path d="M21 6.375c0 2.692-4.03 4.875-9 4.875S3 9.067 3 6.375 7.03 1.5 12 1.5s9 2.183 9 4.875z" />
        <path d="M12 12.75c2.685 0 5.19-.586 7.078-1.609a8.283 8.283 0 001.897-1.384c.016.121.025.244.025.368C21 12.817 16.97 15 12 15s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.285 8.285 0 001.897 1.384C6.809 12.164 9.315 12.75 12 12.75z" />
        <path d="M12 16.5c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 001.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 001.897 1.384C6.809 15.914 9.315 16.5 12 16.5z" />
        <path d="M12 20.25c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 001.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 001.897 1.384C6.809 19.664 9.315 20.25 12 20.25z" />
    </svg>
);
export const PlusIcon = ({
    className,
}: {
    className?: string;
}): ReactElement => (
    <svg
        width="11"
        height="11"
        viewBox="0 0 14 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-4 h-4 ${className}`}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 0.667969H6V6.66797H0V8.66797H6V14.668H8V8.66797H14V6.66797H8V0.667969Z"
            fill="#5d5d5d"
        />
    </svg>
);

export const StatementsIcon = (): ReactElement => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
        x="0px"
        y="0px"
        viewBox="0 0 256 256"
        enableBackground="new 0 0 256 256"
        xmlSpace="preserve"
    >
        <g>
            <g>
                <path
                    fill="currentColor"
                    d="M113.3,61.6H69.1v14.7h44.1L113.3,61.6L113.3,61.6z M69.1,194.3h117.7v-14.7H69.1V194.3z M113.3,91.1H69.1v14.7h44.1L113.3,91.1L113.3,91.1z M164.8,10H47.1C34.9,10,25,19.9,25,32.1v191.7c0,12.2,9.9,22.1,22.1,22.1h161.9c12.2,0,22.1-9.9,22.1-22.1V76.4L164.8,10z M164.8,32.1l44.1,44.2h-29.4c-8.1,0-14.7-6.6-14.7-14.7V32.1L164.8,32.1z M216.3,216.5c0,8.1-6.6,14.7-14.7,14.7H54.4c-8.1,0-14.7-6.6-14.7-14.7v-177c0-8.1,6.6-14.8,14.7-14.8H150V69c0,12.2,9.9,22.1,22.1,22.1h44.1L216.3,216.5L216.3,216.5z M69.1,164.9h117.7v-14.7H69.1V164.9z M69.1,135.4h117.7v-14.8H69.1V135.4z"
                />
            </g>
        </g>
    </svg>
);

export const TaxesIcon = (): ReactElement => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
        x="0px"
        y="0px"
        viewBox="0 0 256 256"
        enableBackground="new 0 0 256 256"
        xmlSpace="preserve"
    >
        <g>
            <g>
                <g>
                    <path
                        fill="currentColor"
                        d="M100.8,20.2c-5.3,1.9-8.9,5.7-10.6,11.1C89,34.9,89,43.3,90,46.9c2.2,7.5,7.8,11.8,15.9,12.3c5.6,0.3,9.5-0.9,12.9-3.9c5-4.5,6.1-7.7,5.9-16.9c-0.1-6.3-0.2-6.7-1.6-9.6c-1.8-3.6-4.7-6.5-8.3-8.1C111,19,105,18.8,100.8,20.2z M112.2,27.9c0.8,0.6,2.1,2.2,2.8,3.5c1.1,2.2,1.2,2.8,1.2,7.9c0,4.9-0.1,5.8-1.1,7.7c-1.4,2.9-3.6,4.6-6.5,4.8c-3.4,0.3-5.4-0.2-7.4-2c-2.8-2.5-3.4-4.6-3.1-11.3c0.1-5,0.3-5.9,1.3-7.7c0.6-1.1,2-2.5,3-3.1C104.9,26.1,109.9,26.3,112.2,27.9z"
                    />
                    <path
                        fill="currentColor"
                        d="M155.4,20.6c-0.5,0.2-8.5,11.1-17.7,24.3c-9.2,13.1-21.9,31.2-28.2,40.2C97.2,102.6,97,103,99.2,105.2c1.4,1.5,3.5,1.5,5,0.1c0.9-0.7,43.9-61.9,54.8-77.7c2.1-3,2.1-4.3,0.4-6.1C158,20.1,157.1,19.9,155.4,20.6z"
                    />
                    <path
                        fill="currentColor"
                        d="M142.4,68.9c-5,1.8-8.5,5.4-10.4,10.6c-0.8,2.3-0.9,3.5-0.7,9.4c0.1,6.5,0.2,6.8,1.7,9.8c2.8,5.7,7.7,8.8,14.5,9.4c8.7,0.7,15.9-4,18.3-11.9c0.8-2.6,0.9-4,0.8-9.2c-0.1-5.4-0.3-6.4-1.4-8.7c-1.6-3.5-4.9-7-8.2-8.5C153.6,67.9,146.2,67.6,142.4,68.9z M152.1,75.6c2.4,0.9,3.5,1.9,4.7,4.7c1,2,1.1,3,1.1,7.8c0,6.1-0.6,8.2-3,10.5c-1.7,1.6-3.4,2.2-6,2.2c-2.7,0-4.7-0.9-6.5-2.9c-2.1-2.4-2.6-4.5-2.6-10.2c0-5.5,0.8-8.1,3.1-10.3C145.2,75.2,148.9,74.5,152.1,75.6z"
                    />
                    <path
                        fill="currentColor"
                        d="M117.2,123.1c-8.4,1.6-16.2,4.8-20.6,8.4c-16.5,13.6-0.8,31.8,28.6,33.2c24.1,1.1,44.3-11.1,40.4-24.4c-2.1-7.3-10.3-13.1-22.6-16.3c-4-1-5.8-1.2-13.6-1.3C123.1,122.6,119.4,122.7,117.2,123.1z"
                    />
                    <path
                        fill="currentColor"
                        d="M196.9,141.2c-12.1,2-22.4,7.9-25.7,14.7c-6.9,14.2,13.6,28.1,39.6,26.8c15.9-0.8,28.9-6.6,33.6-15.1c1.2-2.2,1.4-3,1.4-5.9c0-4.2-1.2-6.9-4.4-10.1c-5.2-5.3-13.9-9.1-24.2-10.6C212.7,140.3,201.3,140.4,196.9,141.2z"
                    />
                    <path
                        fill="currentColor"
                        d="M89.7,162.2v7l2.2,2c5.9,5.6,15.9,9.7,26.5,11.2c5.1,0.7,15,0.6,20.1-0.2c10.6-1.6,19.9-5.6,25.7-11.2l1.9-1.8v-7c0-3.9-0.1-7-0.3-7c-0.1,0-1.5,1.2-3,2.5c-7,6.3-18.6,10.2-32,10.7c-11.6,0.5-20.9-1.2-29.5-5.3c-4.2-2-9.6-5.7-10.5-7.3C90,154.2,89.7,155.6,89.7,162.2z"
                    />
                    <path
                        fill="currentColor"
                        d="M37.9,159.2c-12.3,1.9-22.9,7.7-26.5,14.7c-1.8,3.4-1.8,8.3,0,11.6c2.3,4.2,5.8,7.3,11.4,10.1c6.6,3.3,13.4,4.9,22.5,5.2c18.5,0.7,34.5-5.5,39.4-15.3c5.8-11.8-6.5-23.5-27.9-26.5C52.3,158.3,42.8,158.4,37.9,159.2z"
                    />
                    <path
                        fill="currentColor"
                        d="M89.7,180v7.4l2.4,2.2c7.1,6.3,18.3,10.4,30.7,11.2c17.2,1.2,32.4-3.2,41.9-12.1l1.5-1.4v-7.3v-7.3l-2.6,2.4c-9.3,8.4-26.8,13-43.3,11.1c-11.8-1.3-21.7-5.3-28.1-11.1l-2.6-2.4V180L89.7,180z"
                    />
                    <path
                        fill="currentColor"
                        d="M169.5,180v6.9l3,2.8c5.4,5,15.4,9.2,25.8,10.6c2,0.3,6.5,0.5,10,0.5c14.3,0,27.1-4.1,35.2-11.1l2.6-2.4v-7.1v-7.1l-2.4,2.1c-8.8,7.5-21.1,11.4-35.8,11.4c-14.1,0-27.7-4.2-35.1-10.9c-1.5-1.3-2.8-2.4-3-2.4S169.5,176.3,169.5,180z"
                    />
                    <path
                        fill="currentColor"
                        d="M10,197.7v7.2l1.9,1.9c2.7,2.6,5.2,4.3,9.7,6.4c19.9,9.4,49.4,6.4,62.7-6.4l2.2-2.1v-7.1v-7.1l-2.3,2.1c-3,2.8-6.8,5.2-11.2,7.1c-20.1,8.5-48.1,5.2-60.9-7.1l-2.2-2.1V197.7L10,197.7z"
                    />
                    <path
                        fill="currentColor"
                        d="M89.7,197.7v7.1l3,2.8c7.4,6.7,21.2,11.1,35.2,11.1c14,0,27.8-4.4,35.2-11.2l3-2.8v-7.1v-7.2l-2.4,2.3c-5.4,5.1-13,8.5-23.6,10.6c-5.7,1.1-18.6,1.1-24.7,0c-9.3-1.7-17.7-5.5-23.1-10.4l-2.7-2.5L89.7,197.7L89.7,197.7z"
                    />
                    <path
                        fill="currentColor"
                        d="M169.5,197.7v7.1l2.2,2.1c6.2,5.8,14.8,9.5,26,11.2c17.6,2.6,36.3-1.8,46.3-11.1l1.9-1.8v-7.2v-7.3l-3,2.8c-7.9,7.2-22.9,11.6-37.8,11c-14.1-0.6-25.7-4.6-33.1-11.4l-2.6-2.3V197.7z"
                    />
                    <path
                        fill="currentColor"
                        d="M10,215.7v7.1l2.2,2.1c5.4,5.3,13.5,8.9,23.7,10.9c6,1.1,18.9,1.1,24.6,0c10.6-2.1,18.2-5.5,23.8-10.8l2.3-2.1v-7.1v-7.1l-1.9,1.8c-5.8,5.3-13.5,8.8-23.5,10.8c-6.7,1.3-18.2,1.5-24.8,0.3c-9.7-1.8-18.3-5.6-23.7-10.5l-2.6-2.4V215.7z"
                    />
                    <path
                        fill="currentColor"
                        d="M89.7,215.7v7.1l2.4,2.3c5.4,5.1,13,8.5,23.6,10.6c5.8,1.1,18.7,1.1,24.4,0c10.7-2.1,18.1-5.5,23.8-10.8l2.3-2.1v-7.1v-7.2l-1.9,1.9c-9,8.6-26.2,13.3-42.7,11.7c-12.4-1.2-22.7-5.1-29.3-11.1l-2.6-2.4V215.7L89.7,215.7z"
                    />
                    <path
                        fill="currentColor"
                        d="M169.5,215.7v7.1l2.6,2.4c4.6,4.2,11.2,7.4,19.3,9.5c19.2,4.9,41.7,0.6,52.5-9.8l2.2-2.1v-7.1v-7.1l-2.6,2.4c-5.3,4.8-14,8.7-23.7,10.4c-5.9,1.1-18,1.1-23.9,0c-10.1-1.8-18.5-5.6-24.3-11l-2-1.8L169.5,215.7L169.5,215.7z"
                    />
                </g>
            </g>
        </g>
    </svg>
);

export const GeneralLedgerIcon = (): ReactElement => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
        x="0px"
        y="0px"
        viewBox="0 0 256 256"
        enableBackground="new 0 0 256 256"
        xmlSpace="preserve"
    >
        <g>
            <g>
                <path fill="currentColor" d="M246,84.4" />
                <path
                    fill="currentColor"
                    d="M116.6,20.5H39L10,54.1v104.8h106.6V20.5z M101,144.8H25.5V59.4l21.7-24.9H101V144.8z"
                />
                <path fill="currentColor" d="M36.3,63.2h59.4v12.5H36.3V63.2z" />
                <path fill="currentColor" d="M36.3,86.1h59.4v12.5H36.3V86.1z" />
                <path
                    fill="currentColor"
                    d="M36.3,108.6h59.4v12.5H36.3V108.6z"
                />
                <path
                    fill="currentColor"
                    d="M36.3,131.6h59.5v12.5H36.3V131.6z"
                />
                <path
                    fill="currentColor"
                    d="M36.3,122.3h59.5v12.5H36.3V122.3z"
                />
                <path fill="currentColor" d="M36.3,99.4h59.4v12.5H36.3V99.4z" />
                <path fill="currentColor" d="M36.3,53.9h59.4v12.5H36.3V53.9z" />
                <path fill="currentColor" d="M36.3,76.8h59.4v12.5H36.3V76.8z" />
                <path fill="currentColor" d="M134.8,177.2" />
                <path
                    fill="currentColor"
                    d="M216.1,81.8h-92.9v14.1h83.1v87H87.4v-17.2H71.5v25.5c0,3.2,2.5,5.7,5.6,5.7h54V219H92.3c-3.5,0-6.4,3.2-6.4,7.1v9.5h121.5v-9.5c0-3.9-2.9-7.1-6.5-7.1H162v-22.1h54c3.1,0,5.6-2.6,5.6-5.7V87.5C221.7,84.4,219.2,81.8,216.1,81.8z"
                />
                <path
                    fill="currentColor"
                    d="M128.7,144.5h16.2v24.9h-16.2V144.5L128.7,144.5z"
                />
                <path fill="currentColor" d="M153,134.2h16.2v35.3H153V134.2z" />
                <path
                    fill="currentColor"
                    d="M176.1,112.5h16.2v57.1h-16.2V112.5L176.1,112.5z"
                />
            </g>
        </g>
    </svg>
);

export const CloseIcon = (): ReactElement => (
    <svg
        className="w-4 h-4"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
        />
    </svg>
);

export const ThreeDotsIcon = (): ReactElement => (
    <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 16 16"
        height="20"
        width="20"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"></path>
    </svg>
);
