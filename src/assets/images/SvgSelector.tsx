import React from 'react';

interface SvgSelectorProps {
  iconName: string;
}

export const SvgSelector: React.FC<SvgSelectorProps> = ({ iconName }) => {
  switch (iconName) {
    case 'google':
      return (
        <svg width='24' height='25' viewBox='0 0 24 25' fill='none'>
          <path
            d='M21.8055 10.5415H21V10.5H12V14.5H17.6515C16.827 16.8285 14.6115 18.5 12 18.5C8.6865 18.5 6 15.8135 6 12.5C6 9.1865 8.6865 6.5 12 6.5C13.5295 6.5 14.921 7.077 15.9805 8.0195L18.809 5.191C17.023 3.5265 14.634 2.5 12 2.5C6.4775 2.5 2 6.9775 2 12.5C2 18.0225 6.4775 22.5 12 22.5C17.5225 22.5 22 18.0225 22 12.5C22 11.8295 21.931 11.175 21.8055 10.5415Z'
            fill='#FFC107'
          />
          <path
            d='M3.15295 7.8455L6.43845 10.255C7.32745 8.054 9.48045 6.5 12 6.5C13.5295 6.5 14.921 7.077 15.9805 8.0195L18.809 5.191C17.023 3.5265 14.634 2.5 12 2.5C8.15895 2.5 4.82795 4.6685 3.15295 7.8455Z'
            fill='#FF3D00'
          />
          <path
            d='M12 22.5C14.583 22.5 16.93 21.5115 18.7045 19.904L15.6095 17.285C14.5718 18.0742 13.3038 18.501 12 18.5C9.39904 18.5 7.19054 16.8415 6.35854 14.527L3.09753 17.0395C4.75253 20.278 8.11354 22.5 12 22.5Z'
            fill='#4CAF50'
          />
          <path
            d='M21.8055 10.5415H21V10.5H12V14.5H17.6515C17.2571 15.6082 16.5467 16.5766 15.608 17.2855L15.6095 17.2845L18.7045 19.9035C18.4855 20.1025 22 17.5 22 12.5C22 11.8295 21.931 11.175 21.8055 10.5415Z'
            fill='#1976D2'
          />
        </svg>
      );

    case 'home':
      return (
        <svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
          <path
            d='M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z'
            stroke='#838383'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M9 22V12H15V22'
            stroke='#838383'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      );

    case 'settings':
      return (
        <svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
          <g clipPath='url(#clip0_3_1277)'>
            <path
              d='M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z'
              stroke='#838383'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5843 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6643 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.258 9.77251 19.9887C9.5799 19.7194 9.31074 19.5143 9 19.4C8.69838 19.2669 8.36381 19.2272 8.03941 19.286C7.71502 19.3448 7.41568 19.4995 7.18 19.73L7.12 19.79C6.93425 19.976 6.71368 20.1235 6.47088 20.2241C6.22808 20.3248 5.96783 20.3766 5.705 20.3766C5.44217 20.3766 5.18192 20.3248 4.93912 20.2241C4.69632 20.1235 4.47575 19.976 4.29 19.79C4.10405 19.6043 3.95653 19.3837 3.85588 19.1409C3.75523 18.8981 3.70343 18.6378 3.70343 18.375C3.70343 18.1122 3.75523 17.8519 3.85588 17.6091C3.95653 17.3663 4.10405 17.1457 4.29 16.96L4.35 16.9C4.58054 16.6643 4.73519 16.365 4.794 16.0406C4.85282 15.7162 4.81312 15.3816 4.68 15.08C4.55324 14.7842 4.34276 14.532 4.07447 14.3543C3.80618 14.1766 3.49179 14.0813 3.17 14.08H3C2.46957 14.08 1.96086 13.8693 1.58579 13.4942C1.21071 13.1191 1 12.6104 1 12.08C1 11.5496 1.21071 11.0409 1.58579 10.6658C1.96086 10.2907 2.46957 10.08 3 10.08H3.09C3.42099 10.0723 3.742 9.96512 4.0113 9.77251C4.28059 9.5799 4.48572 9.31074 4.6 9C4.73312 8.69838 4.77282 8.36381 4.714 8.03941C4.65519 7.71502 4.50054 7.41568 4.27 7.18L4.21 7.12C4.02405 6.93425 3.87653 6.71368 3.77588 6.47088C3.67523 6.22808 3.62343 5.96783 3.62343 5.705C3.62343 5.44217 3.67523 5.18192 3.77588 4.93912C3.87653 4.69632 4.02405 4.47575 4.21 4.29C4.39575 4.10405 4.61632 3.95653 4.85912 3.85588C5.10192 3.75523 5.36217 3.70343 5.625 3.70343C5.88783 3.70343 6.14808 3.75523 6.39088 3.85588C6.63368 3.95653 6.85425 4.10405 7.04 4.29L7.1 4.35C7.33568 4.58054 7.63502 4.73519 7.95941 4.794C8.28381 4.85282 8.61838 4.81312 8.92 4.68H9C9.29577 4.55324 9.54802 4.34276 9.72569 4.07447C9.90337 3.80618 9.99872 3.49179 10 3.17V3C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V3.09C14.0013 3.41179 14.0966 3.72618 14.2743 3.99447C14.452 4.26276 14.7042 4.47324 15 4.6C15.3016 4.73312 15.6362 4.77282 15.9606 4.714C16.285 4.65519 16.5843 4.50054 16.82 4.27L16.88 4.21C17.0657 4.02405 17.2863 3.87653 17.5291 3.77588C17.7719 3.67523 18.0322 3.62343 18.295 3.62343C18.5578 3.62343 18.8181 3.67523 19.0609 3.77588C19.3037 3.87653 19.5243 4.02405 19.71 4.21C19.896 4.39575 20.0435 4.61632 20.1441 4.85912C20.2448 5.10192 20.2966 5.36217 20.2966 5.625C20.2966 5.88783 20.2448 6.14808 20.1441 6.39088C20.0435 6.63368 19.896 6.85425 19.71 7.04L19.65 7.1C19.4195 7.33568 19.2648 7.63502 19.206 7.95941C19.1472 8.28381 19.1869 8.61838 19.32 8.92V9C19.4468 9.29577 19.6572 9.54802 19.9255 9.72569C20.1938 9.90337 20.5082 9.99872 20.83 10H21C21.5304 10 22.0391 10.2107 22.4142 10.5858C22.7893 10.9609 23 11.4696 23 12C23 12.5304 22.7893 13.0391 22.4142 13.4142C22.0391 13.7893 21.5304 14 21 14H20.91C20.5882 14.0013 20.2738 14.0966 20.0055 14.2743C19.7372 14.452 19.5268 14.7042 19.4 15V15Z'
              stroke='#838383'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </g>
          <defs>
            <clipPath id='clip0_3_1277'>
              <rect width='24' height='24' fill='white' />
            </clipPath>
          </defs>
        </svg>
      );

    case 'calendar':
      return (
        <svg
          version='1.1'
          id='Capa_1'
          x='0px'
          y='0px'
          width='600.112px'
          height='600.111px'
          viewBox='0 0 600.112 600.111'
        >
          <g>
            <g>
              <g>
                <path
                  d='M537.423,52.563h-59.836V21.92c0-11.83-9.591-21.42-21.42-21.42c-11.83,0-21.42,9.59-21.42,21.42v30.642H165.364V21.92
             c0-11.83-9.59-21.42-21.42-21.42c-11.83,0-21.42,9.59-21.42,21.42v30.642H62.687c-32.058,0-58.14,26.082-58.14,58.14v430.77
             c0,32.059,26.082,58.139,58.14,58.139h474.736c32.059,0,58.141-26.08,58.141-58.139v-430.77
             C595.564,78.645,569.482,52.563,537.423,52.563z M47.387,110.703c0-8.451,6.85-15.3,15.3-15.3h59.837v24.443
             c0,11.83,9.59,21.42,21.42,21.42s21.42-9.59,21.42-21.42V95.403h269.383v24.443c0,11.83,9.59,21.42,21.42,21.42
             c11.829,0,21.42-9.59,21.42-21.42V95.403h59.836c8.45,0,15.3,6.85,15.3,15.3v53.856H47.387V110.703z M552.723,541.473
             c0,8.449-6.85,15.301-15.3,15.301H62.687c-8.45,0-15.3-6.852-15.3-15.301V207.399h505.336V541.473z'
                />
                <path
                  d='M537.423,600.111H62.687c-32.334,0-58.64-26.306-58.64-58.639v-430.77c0-32.334,26.306-58.64,58.64-58.64h59.336V21.92
             c0-12.087,9.833-21.92,21.92-21.92c12.086,0,21.92,9.833,21.92,21.92v30.142h268.384V21.92c0-12.087,9.833-21.92,21.92-21.92
             s21.92,9.833,21.92,21.92v30.143h59.336c32.335,0,58.641,26.306,58.641,58.64v430.77
             C596.064,573.806,569.758,600.111,537.423,600.111z M62.687,53.062c-31.783,0-57.64,25.857-57.64,57.64v430.77
             c0,31.782,25.857,57.639,57.64,57.639h474.736c31.783,0,57.641-25.856,57.641-57.639v-430.77c0-31.783-25.857-57.64-57.641-57.64
             h-60.336V21.92c0-11.536-9.385-20.92-20.92-20.92s-20.92,9.385-20.92,20.92v31.142H164.864V21.92
             c0-11.536-9.385-20.92-20.92-20.92c-11.536,0-20.92,9.385-20.92,20.92v31.142H62.687z M537.423,557.273H62.687
             c-8.712,0-15.8-7.088-15.8-15.801V206.899h506.336v334.574C553.223,550.186,546.135,557.273,537.423,557.273z M47.887,207.899
             v333.574c0,8.161,6.639,14.801,14.8,14.801h474.736c8.16,0,14.8-6.64,14.8-14.801V207.899H47.887z M553.223,165.059H46.887
             v-54.356c0-8.712,7.088-15.8,15.8-15.8h60.337v24.943c0,11.535,9.385,20.92,20.92,20.92s20.92-9.385,20.92-20.92V94.903h270.383
             v24.943c0,11.535,9.385,20.92,20.92,20.92s20.92-9.385,20.92-20.92V94.903h60.336c8.712,0,15.8,7.088,15.8,15.8V165.059z
              M47.887,164.059h504.336v-53.356c0-8.161-6.64-14.8-14.8-14.8h-59.336v23.943c0,12.087-9.833,21.92-21.92,21.92
             s-21.92-9.833-21.92-21.92V95.903H165.864v23.943c0,12.087-9.833,21.92-21.92,21.92s-21.92-9.833-21.92-21.92V95.903H62.687
             c-8.161,0-14.8,6.639-14.8,14.8V164.059z'
                />
              </g>
            </g>
          </g>
        </svg>
      );
    default:
      return null;
  }
};
