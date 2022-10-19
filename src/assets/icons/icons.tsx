import React from 'react'

interface ISelector {
  className?: string;
  id: string;
  onClick?: () => void;
}

export default function IconSelector({ className, id, onClick }: ISelector) {
  switch (id) {
    case 'close':
      return (
        <svg className={`${className}`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_70_2322)">
            <path d="M18.3 5.71C17.91 5.32 17.28 5.32 16.89 5.71L12 10.59L7.10997 5.7C6.71997 5.31 6.08997 5.31 5.69997 5.7C5.30997 6.09 5.30997 6.72 5.69997 7.11L10.59 12L5.69997 16.89C5.30997 17.28 5.30997 17.91 5.69997 18.3C6.08997 18.69 6.71997 18.69 7.10997 18.3L12 13.41L16.89 18.3C17.28 18.69 17.91 18.69 18.3 18.3C18.69 17.91 18.69 17.28 18.3 16.89L13.41 12L18.3 7.11C18.68 6.73 18.68 6.09 18.3 5.71Z" fill="#121720" />
          </g>
          <defs>
            <clipPath id="clip0_70_2322">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      )
    case 'logo':
      return (
        <svg className={`${className}`} width="136" height="28" viewBox="0 0 136 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M31.516 10.5875H22.466C20.4549 1.50477 5.3717 10.5872 9.39389 17.8536C12.4106 21.4867 18.779 20.2756 20.4549 17.8536H30.5104C20.0527 32.3862 6.37725 27.8447 3.36059 25.1199C0.343952 23.3033 -4.88492 8.77087 10.3994 1.50456C25.6838 -3.58186 30.8456 5.44048 31.516 10.5875Z" fill="#121720" />
          <path d="M31.5158 28L36.4011 0H45.1945L40.3092 21.6774H65.7124C71.9655 21.6774 72.2261 16.8602 71.5747 14.4516H69.6206L74.5058 9.93548L80.3681 14.4516H78.414C78.414 24.5677 69.9463 27.6989 65.7124 28H31.5158Z" fill="#121720" />
          <path d="M49.1027 14.4516H51.0567C51.8384 3.6129 61.1529 0.301075 65.7124 0H103.817V6.32258L88.1845 22.5806H100.886L99.909 28H78.414V22.5806L94.0468 7.22581H65.7124C57.1144 7.22581 56.2677 12.043 56.919 14.4516H59.8502L53.9879 18.9677L49.1027 14.4516Z" fill="#121720" />
          <path fillRule="evenodd" clipRule="evenodd" d="M100.11 28L117.188 0H128.929L135.333 28H124.659V23.3333H112.918L109.716 28H100.11ZM116.12 17.7333L121.457 8.4L123.592 17.7333H116.12Z" fill="#121720" />
        </svg>
      )
    case 'east':
      return (
        <svg className={`${className}`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_8_79)">
            <path d="M14.29 5.71001C13.9 6.10001 13.9 6.73001 14.29 7.12001L18.17 11H3C2.45 11 2 11.45 2 12C2 12.55 2.45 13 3 13H18.18L14.3 16.88C13.91 17.27 13.91 17.9 14.3 18.29C14.69 18.68 15.32 18.68 15.71 18.29L21.3 12.7C21.69 12.31 21.69 11.68 21.3 11.29L15.7 5.71001C15.32 5.32001 14.68 5.32001 14.29 5.71001Z" fill="#121720" />
          </g>
          <defs>
            <clipPath id="clip0_8_79">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      )
    case 'heart':
      return (
        <svg onClick={onClick} className={`${className}`} width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_8_11)">
            <path d="M19.66 3.99001C17.02 2.19001 13.76 3.03001 12 5.09001C10.24 3.03001 6.97997 2.18001 4.33997 3.99001C2.93997 4.95001 2.05997 6.57001 1.99997 8.28001C1.85997 12.16 5.29997 15.27 10.55 20.04L10.65 20.13C11.41 20.82 12.58 20.82 13.34 20.12L13.45 20.02C18.7 15.26 22.13 12.15 22 8.27001C21.94 6.57001 21.06 4.95001 19.66 3.99001ZM12.1 18.55L12 18.65L11.9 18.55C7.13997 14.24 3.99997 11.39 3.99997 8.50001C3.99997 6.50001 5.49997 5.00001 7.49997 5.00001C9.03997 5.00001 10.54 5.99001 11.07 7.36001H12.94C13.46 5.99001 14.96 5.00001 16.5 5.00001C18.5 5.00001 20 6.50001 20 8.50001C20 11.39 16.86 14.24 12.1 18.55Z" fill="#121720" />
          </g>
          <defs>
            <clipPath id="clip0_8_11">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      )
    case 'person':
      return (
        <svg onClick={onClick} className={`${className}`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_70_2247)">
            <path d="M12 5.9C13.16 5.9 14.1 6.84 14.1 8C14.1 9.16 13.16 10.1 12 10.1C10.84 10.1 9.9 9.16 9.9 8C9.9 6.84 10.84 5.9 12 5.9ZM12 14.9C14.97 14.9 18.1 16.36 18.1 17V18.1H5.9V17C5.9 16.36 9.03 14.9 12 14.9ZM12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4ZM12 13C9.33 13 4 14.34 4 17V19C4 19.55 4.45 20 5 20H19C19.55 20 20 19.55 20 19V17C20 14.34 14.67 13 12 13Z" fill="#121720" />
          </g>
          <defs>
            <clipPath id="clip0_70_2247">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      )
    case 'search':
      return (
        <svg onClick={onClick} className={`${className}`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_8_53)">
            <path d="M23.6804 22.1377L16.2421 14.6994C17.4571 13.1535 18.1826 11.2056 18.1826 9.09134C18.1826 4.07833 14.1043 0 9.09127 0C4.07833 0 0 4.07833 0 9.09127C0 14.1042 4.07833 18.1825 9.09127 18.1825C11.2055 18.1825 13.1535 17.4571 14.6993 16.2421L22.1377 23.6804C22.3507 23.8935 22.6299 24 22.9091 24C23.1883 24 23.4675 23.8935 23.6804 23.6804C24.1065 23.2545 24.1065 22.5637 23.6804 22.1377ZM2.18182 9.09127C2.18182 5.28138 5.28138 2.18182 9.09127 2.18182C12.9012 2.18182 16.0008 5.28138 16.0008 9.09127C16.0008 12.9012 12.9012 16.0007 9.09127 16.0007C5.28138 16.0007 2.18182 12.9012 2.18182 9.09127Z" fill="#121720" />
          </g>
          <defs>
            <clipPath id="clip0_8_53">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      )
    case 'inst':
      return (
        <svg onClick={onClick} className={`${className}`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.1276 3H7.87244C5.18573 3 3 5.18573 3 7.87244V16.1277C3 18.8143 5.18573 21 7.87244 21H16.1277C18.8143 21 21 18.8143 21 16.1277V7.87244C21 5.18573 18.8143 3 16.1276 3V3ZM12 16.9217C9.2861 16.9217 7.07826 14.7139 7.07826 12C7.07826 9.2861 9.2861 7.07826 12 7.07826C14.7139 7.07826 16.9217 9.2861 16.9217 12C16.9217 14.7139 14.7139 16.9217 12 16.9217ZM17.0394 8.23897C16.2374 8.23897 15.5851 7.58665 15.5851 6.78465C15.5851 5.98265 16.2374 5.3302 17.0394 5.3302C17.8414 5.3302 18.4939 5.98265 18.4939 6.78465C18.4939 7.58665 17.8414 8.23897 17.0394 8.23897Z" fill="#121720" />
          <path d="M12 8.13348C9.86815 8.13348 8.13354 9.86795 8.13354 12C8.13354 14.1319 9.86815 15.8665 12 15.8665C14.1321 15.8665 15.8665 14.1319 15.8665 12C15.8665 9.86795 14.1321 8.13348 12 8.13348Z" fill="#121720" />
        </svg>
      )
    case 'arrowLeft':
      return (
        <svg className={`${className}`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.71 15.88L10.83 12L14.71 8.12001C15.1 7.73001 15.1 7.10001 14.71 6.71001C14.32 6.32001 13.69 6.32001 13.3 6.71001L8.70998 11.3C8.31998 11.69 8.31998 12.32 8.70998 12.71L13.3 17.3C13.69 17.69 14.32 17.69 14.71 17.3C15.09 16.91 15.1 16.27 14.71 15.88Z" fill="#121720" />
        </svg>
      )
    case 'arrowRight':
      return (
        <svg className={`${className}`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.29006 15.88L13.1701 12L9.29006 8.12001C8.90006 7.73001 8.90006 7.10001 9.29006 6.71001C9.68006 6.32001 10.3101 6.32001 10.7001 6.71001L15.2901 11.3C15.6801 11.69 15.6801 12.32 15.2901 12.71L10.7001 17.3C10.3101 17.69 9.68006 17.69 9.29006 17.3C8.91006 16.91 8.90006 16.27 9.29006 15.88Z" fill="#121720" />
        </svg>
      )
    case 'arrowDown':
      return (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.11997 9.29L12 13.17L15.88 9.29C16.27 8.9 16.9 8.9 17.29 9.29C17.68 9.68 17.68 10.31 17.29 10.7L12.7 15.29C12.31 15.68 11.68 15.68 11.29 15.29L6.69997 10.7C6.30997 10.31 6.30997 9.68 6.69997 9.29C7.08997 8.91 7.72997 8.9 8.11997 9.29Z" fill="#121720" />
        </svg>
      )
    case 'southEast':
      return (
        <svg className={`${className}`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_8_127)">
            <path d="M18 9C17.44 9 17 9.45 17 10V15.59L6.11998 4.7C5.72998 4.31 5.09998 4.31 4.70998 4.7C4.31998 5.09 4.31998 5.72 4.70998 6.11L15.59 17H9.99998C9.44998 17 8.99998 17.45 8.99998 18C8.99998 18.55 9.44998 19 9.99998 19H18C18.55 19 19 18.55 19 18V10C19 9.45 18.55 9 18 9Z" fill="#121720" />
          </g>
          <defs>
            <clipPath id="clip0_8_127">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      )
    case 'sec-1':
      return (
        <svg className={`${className}`} width="125" height="124" viewBox="0 0 125 124" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="62.5" cy="62" r="61.5" fill="white" stroke="#EFF0F2" />
          <circle opacity="0.1" cx="54" cy="70" r="20" fill="#7984C0" />
          <g clipPath="url(#clip0_2424_6194)">
            <path d="M80.3573 56.1741C79.8295 54.5397 80.0545 52.0864 78.6827 50.1921C77.3 48.2829 74.8952 47.7402 73.5373 46.7471C72.1938 45.7644 70.9438 43.6261 68.6837 42.8886C66.4873 42.1719 64.2414 43.1444 62.5 43.1444C60.7588 43.1444 58.513 42.1716 56.3163 42.8885C54.0566 43.6258 52.8056 45.7647 51.4629 46.7469C50.1065 47.7388 47.6999 48.2829 46.3175 50.1919C44.9468 52.0846 45.1695 54.5436 44.6427 56.174C44.1413 57.7258 42.5 59.5883 42.5 62.0001C42.5 64.4135 44.1394 66.2687 44.6427 67.8262C45.1705 69.4605 44.9455 71.9139 46.3173 73.8082C47.6999 75.7175 50.1046 76.2601 51.4627 77.2533C52.806 78.2358 54.0562 80.3743 56.3163 81.1117C58.5112 81.8279 60.7606 80.8558 62.5 80.8558C64.237 80.8558 66.4916 81.8269 68.6837 81.1118C70.9434 80.3744 72.1937 78.2361 73.5371 77.2534C74.8935 76.2615 77.3001 75.7173 78.6825 73.8084C80.0533 71.9156 79.8304 69.4569 80.3573 67.8262C80.8588 66.2744 82.5 64.4119 82.5 62.0001C82.5 59.5869 80.861 57.7322 80.3573 56.1741V56.1741ZM77.3838 66.8653C76.7686 68.7696 76.9298 70.9008 76.1516 71.9753C75.363 73.0641 73.2913 73.5615 71.6926 74.7308C70.1114 75.8872 69.0032 77.7202 67.7143 78.1408C66.4949 78.5387 64.5077 77.7307 62.5001 77.7307C60.4777 77.7307 58.511 78.5404 57.2858 78.1408C55.997 77.7202 54.8904 75.8884 53.3075 74.7308C51.7183 73.5685 49.6347 73.0609 48.8484 71.9751C48.0727 70.9042 48.2278 68.7583 47.6163 66.8654C47.017 65.0108 45.625 63.4049 45.625 62.0001C45.625 60.594 47.0157 58.9937 47.6162 57.135C48.2314 55.2308 48.0702 53.0994 48.8484 52.025C49.6365 50.9369 51.7098 50.4379 53.3075 49.2694C54.8937 48.1094 55.9949 46.2807 57.2856 45.8595C58.504 45.462 60.4977 46.2696 62.4999 46.2696C64.5259 46.2696 66.4877 45.4593 67.7142 45.8595C69.0028 46.28 70.1104 48.1125 71.6926 49.2695C73.2816 50.4318 75.3653 50.9394 76.1516 52.0251C76.9274 53.0962 76.7715 55.24 77.3837 57.1348V57.1349C77.983 58.9895 79.375 60.5954 79.375 62.0001C79.375 63.4063 77.9843 65.0066 77.3838 66.8653V66.8653ZM69.6987 56.9849C70.3089 57.5951 70.3089 58.5844 69.6987 59.1946L61.8779 67.0154C61.2677 67.6256 60.2783 67.6255 59.6681 67.0154L55.3014 62.6487C54.6912 62.0384 54.6911 61.0491 55.3013 60.439C55.9116 59.8288 56.901 59.8287 57.511 60.439L60.773 63.7008L67.4888 56.985C68.0991 56.3747 69.0884 56.3747 69.6987 56.9849V56.9849Z" fill="#7984C0" />
          </g>
          <defs>
            <clipPath id="clip0_2424_6194">
              <rect width="40" height="40" fill="white" transform="translate(42.5 42)" />
            </clipPath>
          </defs>
        </svg>
      )
    case 'sec-2':
      return (
        <svg className={`${className}`} width="125" height="124" viewBox="0 0 125 124" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="62.5" cy="62" r="61.5" fill="white" stroke="#EFF0F2" />
          <circle opacity="0.1" cx="54" cy="70" r="20" fill="#7984C0" />
          <g clipPath="url(#clip0_2444_3770)">
            <path d="M80.9375 52.7812C81.8005 52.7812 82.5 52.0817 82.5 51.2188V48.25C82.5 44.8038 79.6962 42 76.25 42H48.75C45.3038 42 42.5 44.8038 42.5 48.25V75.75C42.5 79.1962 45.3038 82 48.75 82H76.25C78.9445 82 81.3276 80.2835 82.1798 77.7288C82.4529 76.9102 82.0106 76.0252 81.192 75.7522C80.3734 75.4789 79.4884 75.9214 79.2154 76.7399C78.7894 78.017 77.5977 78.875 76.25 78.875H48.75C47.0269 78.875 45.625 77.4731 45.625 75.75V57.3572C46.1139 57.5305 46.6399 57.625 47.1875 57.625H76.25C77.9731 57.625 79.375 59.0269 79.375 60.75V63.6406H74.1406C67.9205 63.8988 67.9253 72.7597 74.1406 73.0156H80.9375C81.8005 73.0156 82.5 72.316 82.5 71.4531V60.75C82.5 57.3038 79.6962 54.5 76.25 54.5H47.1875C45.1141 54.4139 45.1158 51.4604 47.1875 51.375H74.6875C76.7606 51.2925 76.7591 48.3318 74.6875 48.25H47.1875C46.6399 48.25 46.1139 48.3444 45.625 48.5177V48.25C45.625 46.5269 47.0269 45.125 48.75 45.125H76.25C77.9731 45.125 79.375 46.5269 79.375 48.25V51.2188C79.375 52.0817 80.0745 52.7812 80.9375 52.7812V52.7812ZM79.375 69.8906H74.1406C72.0673 69.8045 72.0688 66.8509 74.1406 66.7656H79.375V69.8906Z" fill="#7984C0" />
          </g>
          <defs>
            <clipPath id="clip0_2444_3770">
              <rect width="40" height="40" fill="white" transform="translate(42.5 42)" />
            </clipPath>
          </defs>
        </svg>

      )
    case 'sec-3':
      return (
        <svg className={`${className}`} width="125" height="124" viewBox="0 0 125 124" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="62.5" cy="62" r="61.5" fill="white" stroke="#EFF0F2" />
          <circle opacity="0.1" cx="54" cy="70" r="20" fill="#7984C0" />
          <g clipPath="url(#clip0_2444_3757)">
            <path d="M73.75 56.6875H57.1846V50.2633C57.1846 47.43 59.5678 45.125 62.4971 45.125C65.4264 45.125 67.8096 47.43 67.8096 50.2633V53.25H70.9346V50.2633C70.9346 45.7069 67.1495 42 62.4971 42C57.8447 42 54.0596 45.7069 54.0596 50.2633V56.6875H51.25C48.6653 56.6875 46.5625 58.7903 46.5625 61.375V77.3125C46.5625 79.8972 48.6653 82 51.25 82H73.75C76.3347 82 78.4375 79.8972 78.4375 77.3125V61.375C78.4375 58.7903 76.3347 56.6875 73.75 56.6875ZM75.3125 77.3125C75.3125 78.1741 74.6116 78.875 73.75 78.875H51.25C50.3884 78.875 49.6875 78.1741 49.6875 77.3125V61.375C49.6875 60.5134 50.3884 59.8125 51.25 59.8125H73.75C74.6116 59.8125 75.3125 60.5134 75.3125 61.375V77.3125Z" fill="#7984C0" />
            <path d="M62.5 64.3438C60.9035 64.3438 59.6094 65.6379 59.6094 67.2344C59.6094 68.2538 60.1375 69.1492 60.9346 69.6639V73.0938C60.9346 73.9566 61.6341 74.6562 62.4971 74.6562C63.36 74.6562 64.0596 73.9566 64.0596 73.0938V69.6676C64.8599 69.1535 65.3906 68.2562 65.3906 67.2344C65.3906 65.6379 64.0965 64.3438 62.5 64.3438Z" fill="#7984C0" />
          </g>
          <defs>
            <clipPath id="clip0_2444_3757">
              <rect width="40" height="40" fill="white" transform="translate(42.5 42)" />
            </clipPath>
          </defs>
        </svg>
      )
    case 'sec-4':
      return (
        <svg className={`${className}`} width="125" height="124" viewBox="0 0 125 124" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="62.5" cy="62" r="61.5" fill="white" stroke="#EFF0F2" />
          <circle opacity="0.1" cx="54" cy="70" r="20" fill="#7984C0" />
          <g clipPath="url(#clip0_2444_3804)">
            <path d="M82.5 62C82.5 62.7572 82.4572 63.5202 82.3727 64.2677C82.2259 65.567 80.6384 66.1202 79.7152 65.1971L75.4133 60.8952C74.803 60.2849 74.803 59.2956 75.4133 58.6855C76.0234 58.0752 77.0128 58.0752 77.623 58.6855L79.2968 60.3593C78.4921 51.9633 71.418 45.125 62.5 45.125C53.1206 45.125 45.625 52.7352 45.625 62C45.625 71.3276 53.1737 78.875 62.5 78.875C68.6836 78.875 74.3652 75.4984 77.3278 70.063C77.7407 69.3052 78.6897 69.0259 79.4475 69.4388C80.2052 69.8517 80.4846 70.8008 80.0716 71.5584C76.5613 77.9991 69.8283 82 62.5 82C51.4451 82 42.5 73.0534 42.5 62C42.5 50.9565 51.4559 42 62.5 42C73.5548 42 82.5 50.9466 82.5 62V62ZM62.5 48.25C61.637 48.25 60.9375 48.9495 60.9375 49.8125V62C60.9375 62.4144 61.1021 62.8119 61.3952 63.1048L67.8585 69.5682C68.4687 70.1784 69.458 70.1784 70.0683 69.5682C70.6784 68.958 70.6784 67.9687 70.0683 67.3585L64.0625 61.3528V49.8125C64.0625 48.9495 63.363 48.25 62.5 48.25Z" fill="#7984C0" />
          </g>
          <defs>
            <clipPath id="clip0_2444_3804">
              <rect width="40" height="40" fill="white" transform="translate(42.5 42)" />
            </clipPath>
          </defs>
        </svg>
      )
    case 'okay':
      return (
        <svg className={`${className}`} width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle opacity="0.1" cx="20" cy="28" r="20" fill="#7984C0" />
          <g clipPath="url(#clip0_2447_8830)">
            <path d="M36.8409 13.6539C37.4513 14.2642 37.4513 15.2536 36.8409 15.8636L26.3588 26.3461C25.7484 26.9562 24.7593 26.9562 24.149 26.3461L19.1591 21.3559C18.5487 20.7458 18.5487 19.7565 19.1591 19.1464C19.7691 18.5361 20.7585 18.5361 21.3685 19.1464L25.2537 23.0316L34.6312 13.6539C35.2415 13.0438 36.2309 13.0438 36.8409 13.6539V13.6539ZM48 20C48 31.055 39.0535 40 28 40C16.945 40 8 31.0535 8 20C8 8.94501 16.9465 0 28 0C39.055 0 48 8.94653 48 20ZM44.875 20C44.875 10.6723 37.3265 3.125 28 3.125C18.6723 3.125 11.125 10.6735 11.125 20C11.125 29.3277 18.6735 36.875 28 36.875C37.3277 36.875 44.875 29.3265 44.875 20Z" fill="#7984C0" />
          </g>
          <defs>
            <clipPath id="clip0_2447_8830">
              <rect width="40" height="40" fill="white" transform="translate(8)" />
            </clipPath>
          </defs>
        </svg>
      )
    case 'inst-big':
      return (
        <svg className={className} width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" rx="12" fill="#7984C0" />
          <path d="M28.1276 15H19.8724C17.1857 15 15 17.1857 15 19.8724V28.1277C15 30.8143 17.1857 33 19.8724 33H28.1277C30.8143 33 33 30.8143 33 28.1277V19.8724C33 17.1857 30.8143 15 28.1276 15V15ZM24 28.9217C21.2861 28.9217 19.0783 26.7139 19.0783 24C19.0783 21.2861 21.2861 19.0783 24 19.0783C26.7139 19.0783 28.9217 21.2861 28.9217 24C28.9217 26.7139 26.7139 28.9217 24 28.9217ZM29.0394 20.239C28.2374 20.239 27.5851 19.5867 27.5851 18.7847C27.5851 17.9827 28.2374 17.3302 29.0394 17.3302C29.8414 17.3302 30.4939 17.9827 30.4939 18.7847C30.4939 19.5867 29.8414 20.239 29.0394 20.239Z" fill="white" />
          <path d="M23.9998 20.1335C21.8679 20.1335 20.1333 21.868 20.1333 24C20.1333 26.1319 21.8679 27.8665 23.9998 27.8665C26.1318 27.8665 27.8663 26.1319 27.8663 24C27.8663 21.868 26.1318 20.1335 23.9998 20.1335Z" fill="white" />
        </svg>
      )
    case 'logout':
      return (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_122_3978)">
            <path d="M17 7L15.59 8.41L18.17 11H8V13H18.17L15.59 15.58L17 17L22 12L17 7ZM4 5H12V3H4C2.9 3 2 3.9 2 5V19C2 20.1 2.9 21 4 21H12V19H4V5Z" fill="#121720" />
          </g>
          <defs>
            <clipPath id="clip0_122_3978">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      )
    case 'verified-user':
      return (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_24_545)">
            <path d="M11.19 1.36L4.19 4.47C3.47 4.79 3 5.51 3 6.3V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V6.3C21 5.51 20.53 4.79 19.81 4.47L12.81 1.36C12.3 1.13 11.7 1.13 11.19 1.36ZM9.29 16.29L6.7 13.7C6.31 13.31 6.31 12.68 6.7 12.29C7.09 11.9 7.72 11.9 8.11 12.29L10 14.17L15.88 8.29C16.27 7.9 16.9 7.9 17.29 8.29C17.68 8.68 17.68 9.31 17.29 9.7L10.7 16.29C10.32 16.68 9.68 16.68 9.29 16.29Z" fill="#121720" />
          </g>
          <defs>
            <clipPath id="clip0_24_545">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      )
    case 'loader':
      return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
          <circle cx="50" cy="50" r="0" fill="none" stroke="#7984c0" strokeWidth="2">
            <animate attributeName="r" repeatCount="indefinite" dur="1s" values="0;40" keyTimes="0;1" keySplines="0 0.2 0.8 1" calcMode="spline" begin="0s"></animate>
            <animate attributeName="opacity" repeatCount="indefinite" dur="1s" values="1;0" keyTimes="0;1" keySplines="0.2 0 0.8 1" calcMode="spline" begin="0s"></animate>
          </circle><circle cx="50" cy="50" r="0" fill="none" stroke="#eb5783" strokeWidth="2">
            <animate attributeName="r" repeatCount="indefinite" dur="1s" values="0;40" keyTimes="0;1" keySplines="0 0.2 0.8 1" calcMode="spline" begin="-0.5s"></animate>
            <animate attributeName="opacity" repeatCount="indefinite" dur="1s" values="1;0" keyTimes="0;1" keySplines="0.2 0 0.8 1" calcMode="spline" begin="-0.5s"></animate>
          </circle>
        </svg>
      )
    case 'plus':
      return (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_84_1461)">
            <path d="M18 13H13V18C13 18.55 12.55 19 12 19C11.45 19 11 18.55 11 18V13H6C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11H11V6C11 5.45 11.45 5 12 5C12.55 5 13 5.45 13 6V11H18C18.55 11 19 11.45 19 12C19 12.55 18.55 13 18 13Z" fill="#121720" />
          </g>
          <defs>
            <clipPath id="clip0_84_1461">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      )
    case 'uah':
      return (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.59 11H18V9H16.32C16.74 8.34 17 7.68 17 7C17 4.37 14.5 3 12 3C9.65 3 7.53 5.06 7.29 5.29L8.71 6.71C9.19 6.23 10.71 5 12 5C13.04 5 15 5.42 15 7C15 7.5 14.5 8.24 13.76 9H6V11H11.63C11.21 11.36 9.75 12.67 9.41 13H6V15H7.68C7.26 15.66 7 16.32 7 17C7 19.63 9.5 21 12 21C14.35 21 16.47 18.94 16.71 18.71L15.29 17.29C14.82 17.77 13.29 19 12 19C10.96 19 9 18.58 9 17C9 16.5 9.5 15.76 10.24 15H18V13H12.38L14.59 11Z" fill="black" />
        </svg>
      )
    case 'check-mark':
      return (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_39_555)">
            <path d="M17.3046 8.19232C17.6708 8.55853 17.6708 9.15216 17.3046 9.51819L11.0153 15.8077C10.649 16.1737 10.0556 16.1737 9.68939 15.8077L6.69543 12.8135C6.32922 12.4475 6.32922 11.8539 6.69543 11.4879C7.06146 11.1216 7.65509 11.1216 8.02112 11.4879L10.3522 13.819L15.9787 8.19232C16.3449 7.82629 16.9385 7.82629 17.3046 8.19232ZM24 12C24 18.633 18.6321 24 12 24C5.367 24 0 18.6321 0 12C0 5.367 5.36792 0 12 0C18.633 0 24 5.36792 24 12ZM22.125 12C22.125 6.40338 17.5959 1.875 12 1.875C6.40338 1.875 1.875 6.40411 1.875 12C1.875 17.5966 6.40411 22.125 12 22.125C17.5966 22.125 22.125 17.5959 22.125 12Z" fill="#121720" />
          </g>
          <defs>
            <clipPath id="clip0_39_555">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>

      )
    default:
      return (
        <div></div>
      )
  }
}