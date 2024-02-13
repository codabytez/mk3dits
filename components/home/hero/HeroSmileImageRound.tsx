"use client";
import { ChakraBox } from "@/helpers/customChakra";
import { Box } from "@chakra-ui/react";
import { NextPage } from "next";

const HeroSmileImageRound: NextPage = () => {
  return (
    <ChakraBox
      animate={{ rotate: 360 }}
      // @ts-expect-error no problem in operation, although type error appears.
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop",
      }}
    >
      <Box
        as={"svg"}
        width={{ base: "59px", lg: "95px" }}
        height={{ base: "59px", lg: "97px" }}
        viewBox="0 0 95 97"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_288_3164)">
          <rect
            x="1"
            y="1.41992"
            width="90.0111"
            height="90.0111"
            rx="45.0056"
            fill="#FFDC58"
            stroke="black"
            stroke-width="2"
          />
          <path
            d="M38.4267 30.5438L38.2168 29.593C38.1612 29.3408 38.208 29.0768 38.3469 28.8591C38.4859 28.6415 38.7057 28.4879 38.9578 28.4322C39.21 28.3766 39.474 28.4234 39.6917 28.5624C39.9094 28.7013 40.0629 28.9211 40.1186 29.1733L40.3284 30.1241C40.3841 30.3763 40.3373 30.6403 40.1983 30.8579C40.0593 31.0756 39.7514 30.9525 39.4992 31.0081C39.247 31.0638 39.0712 31.2937 38.8536 31.1547C38.6359 31.0158 38.4823 30.796 38.4267 30.5438ZM45.2558 29.7377C45.5079 29.6821 45.7645 29.8165 45.9035 29.5989C46.0425 29.3812 46.0893 29.1172 46.0336 28.865L45.8238 27.9142C45.7681 27.662 45.6145 27.4422 45.3969 27.3033C45.1792 27.1643 44.9152 27.1175 44.663 27.1731C44.4109 27.2288 44.1911 27.3824 44.0521 27.6C43.9132 27.8177 43.8664 28.0817 43.922 28.3339L44.1319 29.2847C44.1875 29.5369 44.3411 29.7567 44.5588 29.8956C44.7764 30.0346 45.0036 29.7934 45.2558 29.7377ZM45.168 43.0165C43.1505 43.4618 41.3926 44.6902 40.2808 46.4316C39.1691 48.1731 38.7947 50.2848 39.2399 52.3023L39.4497 53.2531C39.5054 53.5053 39.659 53.7251 39.8766 53.864C40.0943 54.003 39.8539 53.3529 40.1061 53.2972C40.3583 53.2416 41.0824 53.7849 41.2214 53.5673C41.3603 53.3496 41.4071 53.0856 41.3515 52.8334L41.1416 51.8826C40.8077 50.3694 41.0885 48.7857 41.9223 47.4796C42.7561 46.1735 44.0746 45.2522 45.5877 44.9183C45.8399 44.8626 46.0597 44.7091 46.1986 44.4914C46.3376 44.2737 46.3844 44.0097 46.3287 43.7576C46.2731 43.5054 46.1195 43.2856 45.9019 43.1467C45.6842 43.0077 45.4202 42.9609 45.168 43.0165ZM48.9173 43.1065C48.7932 43.0715 48.6634 43.0614 48.5354 43.077C48.4074 43.0925 48.2838 43.1333 48.1717 43.197C48.0596 43.2607 47.9612 43.346 47.8824 43.4481C47.8035 43.5501 47.7416 43.73 47.7082 43.8545C47.6403 44.1036 47.6781 44.3062 47.8061 44.5304C47.9341 44.7545 48.1459 44.9187 48.3949 44.9868C48.5957 45.0426 48.7933 45.1088 48.9872 45.1852C49.1679 45.2562 49.3658 45.2716 49.5553 45.2293C49.7111 45.1952 49.8562 45.1233 49.9777 45.0199C50.0992 44.9166 50.1924 44.8546 50.2511 44.7063C50.2984 44.5872 50.3227 44.3905 50.3207 44.2624C50.3187 44.1344 50.2914 44.0079 50.2405 43.8904C50.1895 43.7729 50.1159 43.6666 50.0238 43.5776C49.9317 43.4886 49.823 43.4186 49.7038 43.3717C49.442 43.2699 49.1939 43.1851 48.9173 43.1065ZM51.2651 45.3406C51.1689 45.4261 51.0906 45.5299 51.0347 45.6459C50.9789 45.7619 50.9466 45.8878 50.9397 46.0164C50.9329 46.1449 50.9516 46.2736 50.9947 46.3949C51.0379 46.5162 51.1047 46.6277 51.1913 46.723C51.8671 47.4699 52.3362 48.3804 52.552 49.3644L52.7619 50.3152C52.8175 50.5674 52.9711 50.7872 53.1888 50.9261C53.4064 51.0651 53.8342 50.2675 54.0864 50.2119C54.3386 50.1562 54.3945 50.847 54.5335 50.6294C54.6724 50.4117 54.7192 50.1477 54.6636 49.8955L54.4537 48.9447C54.1756 47.6324 53.5632 46.4142 52.6761 45.4081C52.5898 45.308 52.484 45.2265 52.3652 45.1686C52.2464 45.1107 52.1171 45.0776 51.9851 45.0713C51.8531 45.065 51.7212 45.0856 51.5974 45.1319C51.4736 45.1782 51.3606 45.2492 51.2651 45.3406ZM69.0459 51.8071C69.3033 54.3839 68.841 56.9815 67.7105 59.3114L68.4807 62.8011C68.936 64.9058 68.6005 67.1045 67.5381 68.9776C66.4758 70.8507 64.7609 72.2671 62.7209 72.9565C60.6808 73.6459 58.4583 73.5601 56.4775 72.7154C54.4967 71.8707 52.8962 70.3263 51.9814 68.3768C51.5916 68.4629 51.2238 68.6039 50.834 68.6899C50.4441 68.776 50.0638 68.8599 49.6613 68.8889C49.652 71.0423 48.8502 73.1169 47.4089 74.7168C45.9676 76.3167 43.9877 77.33 41.8469 77.5632C39.7062 77.7965 37.5545 77.2334 35.8024 75.9814C34.0504 74.7294 32.8206 72.8762 32.3478 70.7753L31.5777 67.2856C29.5716 65.648 28.0589 63.4862 27.2079 61.0404C24.9492 54.1498 28.7289 45.7471 36.6243 39.637C34.2595 38.1093 32.5912 35.7119 31.9805 32.9636C31.891 32.5366 31.8257 32.1049 31.7849 31.6706C30.5694 31.5492 29.4235 31.0462 28.5115 30.2336C27.5995 29.421 26.9682 28.3405 26.7081 27.147C26.4522 25.9238 26.5953 24.6508 27.1163 23.5149C27.6373 22.3791 28.5088 21.4402 29.6027 20.8362C30.6967 20.2321 31.9555 19.9948 33.1943 20.1589C34.4332 20.3231 35.5867 20.8802 36.4856 21.7483C38.7024 20.2617 41.3988 19.6666 44.0354 20.0821C44.3542 19.2009 44.8803 18.4093 45.5693 17.774C46.2582 17.1388 47.0899 16.6787 47.9941 16.4324C48.8982 16.1861 49.8484 16.1609 50.7643 16.359C51.6803 16.557 52.5351 16.9725 53.2568 17.5703C53.9784 18.1682 54.5457 18.9308 54.9107 19.794C55.2756 20.6571 55.4277 21.5953 55.3539 22.5295C55.2801 23.4637 54.9826 24.3665 54.4867 25.1616C53.9907 25.9567 53.3108 26.6208 52.5042 27.098C52.6594 27.5065 52.7914 27.9235 52.8995 28.347C53.5022 31.097 52.9979 33.9738 51.4958 36.355C61.2211 38.5364 68.1946 44.6059 69.0459 51.8071ZM45.9644 20.5539C48.379 21.3935 50.4161 23.0647 51.7116 25.2686C52.2228 24.9336 52.648 24.4829 52.9528 23.9531C53.2575 23.4233 53.4334 22.8293 53.466 22.2189C53.4987 21.6086 53.3873 20.9991 53.1407 20.4398C52.8942 19.8806 52.5195 19.3871 52.047 18.9995C51.5744 18.6118 51.0173 18.3408 50.4206 18.2084C49.8239 18.0759 49.2044 18.0858 48.6123 18.2371C48.0201 18.3884 47.4718 18.677 47.0118 19.0795C46.5518 19.482 46.193 19.987 45.9644 20.5539ZM31.7624 29.6712C32.01 27.1268 33.1545 24.7534 34.9914 22.9755C34.5454 22.5576 34.0074 22.2504 33.4207 22.0789C32.8341 21.9075 32.2153 21.8765 31.6144 21.9884C31.0135 22.1004 30.4475 22.3522 29.9619 22.7235C29.4764 23.0947 29.0851 23.5751 28.8196 24.1256C28.5541 24.6761 28.4219 25.2814 28.4337 25.8925C28.4454 26.5036 28.6009 27.1034 28.8874 27.6433C29.1739 28.1832 29.5834 28.6481 30.0829 29.0004C30.5823 29.3527 31.1577 29.5825 31.7624 29.6712ZM33.8822 32.5439C34.3476 34.648 35.5719 36.5069 37.3213 37.7653C39.0706 39.0238 41.2223 39.5936 43.3652 39.3659L42.6895 36.3041C42.2807 36.1748 41.9261 35.9142 41.6805 35.5628C41.4349 35.2114 41.3122 34.7888 41.3313 34.3605C41.3504 33.9322 41.5103 33.5222 41.7862 33.194C42.0621 32.8659 42.5949 33.3467 43.0136 33.2543C43.4322 33.1619 43.7132 32.5015 44.1016 32.6831C44.49 32.8646 44.8076 33.1692 45.0052 33.5497C45.2028 33.9302 45.2693 34.3652 45.1944 34.7873C45.1196 35.2094 44.9075 35.5951 44.5912 35.8844L45.2669 38.9462C46.8684 38.4002 48.2775 37.4024 49.3243 36.0731C50.371 34.7438 51.0106 33.14 51.1659 31.4552C51.3211 29.7703 50.9852 28.0766 50.199 26.5785C49.4127 25.0803 48.2095 23.8418 46.7348 23.0125C45.26 22.1832 43.5767 21.7985 41.8881 21.9048C40.1995 22.0112 38.5778 22.6041 37.2188 23.612C35.8598 24.6198 34.8216 25.9995 34.2295 27.5845C33.6374 29.1694 33.5168 30.8919 33.8822 32.5439ZM46.5124 62.6634C46.1228 60.8981 45.0479 59.3599 43.5242 58.3871C42.0005 57.4143 40.4932 58.3863 38.7279 58.7759C36.9626 59.1655 35.0839 58.9408 34.1111 60.4645C33.1383 61.9882 32.8107 63.836 33.2003 65.6013L34.2495 70.3556C34.6391 72.1209 35.714 73.6591 37.2378 74.6319C38.7615 75.6047 40.411 74.7905 42.1763 74.401C43.9416 74.0114 45.6781 74.0783 46.6508 72.5545C47.6236 71.0308 47.9512 69.183 47.5617 67.4177L46.5124 62.6634ZM51.3651 66.5783L50.7356 63.7257C50.1244 63.9537 49.4842 64.0949 48.8338 64.1454L49.4634 66.998C50.1069 66.9059 50.7426 66.7656 51.3651 66.5783ZM65.5297 58.4664C65.1401 56.7011 64.0652 55.1629 62.5415 54.1901C61.0178 53.2173 59.4593 54.2007 57.694 54.5902C55.9287 54.9798 54.1012 54.7438 53.1284 56.2675C52.1556 57.7913 51.828 59.639 52.2176 61.4043L53.2669 66.1586C53.6564 67.9239 54.7313 69.4622 56.2551 70.4349C57.7788 71.4077 59.3771 70.6049 61.1424 70.2153C62.9077 69.8257 64.6954 69.8813 65.6682 68.3575C66.6409 66.8338 66.9686 64.986 66.579 63.2208L65.5297 58.4664ZM50.1678 38.064C48.7015 39.5924 46.8151 40.6517 44.7469 41.1081C42.6787 41.5646 40.5216 41.3976 38.5482 40.6284C30.905 46.1643 27.0213 54.231 29.0676 60.4306C29.5048 61.7642 30.1975 63 31.1071 64.0689C31.1251 62.7799 31.4272 61.5108 31.9919 60.352C32.5566 59.1932 33.37 58.1732 34.3741 57.3648L33.3941 52.9243C33.1403 51.7627 33.0321 50.574 33.0718 49.3856C33.0829 49.1282 33.1955 48.8857 33.385 48.7112C33.5746 48.5367 33.9165 50.0105 34.1739 50.0206C34.302 50.0249 34.337 48.4883 34.4536 48.5413C34.5703 48.5944 34.6753 48.6699 34.7627 48.7637C34.8501 48.8574 34.9181 48.9675 34.9629 49.0876C35.0076 49.2076 35.0283 49.3354 35.0236 49.4634C34.9816 50.4847 35.0731 51.507 35.2958 52.5046L36.1142 56.213C36.7055 55.9296 37.3274 55.7154 37.9677 55.5746C40.221 55.0771 42.5795 55.4885 44.5313 56.7193C46.4832 57.9501 47.8709 59.901 48.3932 62.1486C49.0471 62.124 49.6913 61.9818 50.2949 61.7289C49.8227 59.4702 50.2603 57.1165 51.5129 55.1785C52.7654 53.2405 54.7317 51.8747 56.985 51.3776C57.6251 51.2359 58.2795 51.1684 58.935 51.1766L58.1166 47.4682C57.8995 46.48 57.5577 45.5234 57.0994 44.6214C56.9824 44.3907 56.9618 44.1229 57.0422 43.877C57.1226 43.6311 57.9206 44.5063 58.1513 44.3892C58.382 44.2722 58.0265 43.1726 58.2724 43.253C58.5183 43.3334 58.7222 43.5081 58.8392 43.7388C59.37 44.788 59.7662 45.9 60.0183 47.0485L60.9983 51.489C62.2494 51.7997 63.4165 52.3826 64.4165 53.1961C65.4165 54.0096 66.2247 55.0337 66.7835 56.1954C67.1588 54.8429 67.267 53.4304 67.1022 52.0366C66.3491 45.5516 59.431 39.8688 50.1678 38.064ZM43.8697 64.2438L44.7091 68.0473C44.9317 69.056 44.7445 70.1119 44.1886 70.9826C43.6327 71.8533 42.7537 72.4675 41.745 72.6901C40.7363 72.9128 39.6804 72.7255 38.8097 72.1697C37.939 71.6138 37.3248 70.7348 37.1021 69.7261L36.2627 65.9226C36.0401 64.9139 36.2273 63.858 36.7832 62.9873C37.3391 62.1166 38.2181 61.5024 39.2268 61.2797C40.2355 61.0571 41.2914 61.2443 42.1621 61.8002C43.0328 62.3561 43.647 63.2351 43.8697 64.2438ZM41.9679 64.6635C41.8566 64.1591 41.5495 63.7196 41.1142 63.4417C40.6788 63.1638 40.8181 66.0933 40.3137 66.2046C39.8093 66.3159 38.7026 63.5999 38.4247 64.0353C38.1468 64.4706 38.0532 64.9985 38.1645 65.5029L39.0039 69.3064C39.1152 69.8107 39.4223 70.2502 39.8576 70.5282C40.293 70.8061 40.1688 67.9446 40.6731 67.8333C41.1775 67.722 42.2692 70.37 42.5471 69.9346C42.825 69.4993 42.9186 68.9713 42.8073 68.467L41.9679 64.6635ZM62.887 60.0468L63.7264 63.8503C63.949 64.859 63.7618 65.9149 63.2059 66.7856C62.65 67.6563 61.771 68.2705 60.7623 68.4932C59.7536 68.7158 58.6977 68.5286 57.827 67.9727C56.9563 67.4168 56.3421 66.5378 56.1194 65.5291L55.2801 61.7256C55.0574 60.7169 55.2446 59.661 55.8005 58.7903C56.3564 57.9196 57.2354 57.3054 58.2441 57.0828C59.2529 56.8601 60.3087 57.0474 61.1794 57.6032C62.0501 58.1591 62.6643 59.0381 62.887 60.0468ZM60.9852 60.4665C60.8739 59.9622 60.5668 59.5227 60.1315 59.2447C59.6961 58.9668 59.7977 61.7258 59.2934 61.8371C58.789 61.9484 57.7199 59.4029 57.442 59.8383C57.1641 60.2736 57.0705 60.8016 57.1818 61.3059L58.0212 65.1094C58.1325 65.6138 58.4396 66.0533 58.875 66.3312C59.3103 66.6091 59.1709 63.6789 59.6753 63.5676C60.1796 63.4562 61.2865 66.173 61.5644 65.7377C61.8423 65.3023 61.9359 64.7744 61.8246 64.27L60.9852 60.4665Z"
            fill="#1C1C1C"
          />
          <path
            d="M34.0897 23.7628C34.3692 23.8371 34.633 23.9485 34.8739 24.0924C33.4689 25.5411 32.5355 27.3469 32.1988 29.282C31.9003 29.1956 31.6189 29.0661 31.3647 28.8978C30.9776 28.6416 30.6646 28.3029 30.4485 27.9107C30.2325 27.5187 30.1184 27.0823 30.1151 26.6361C30.1117 26.1898 30.2193 25.7439 30.4315 25.3345C30.6439 24.925 30.9554 24.5632 31.3427 24.2804C31.7302 23.9976 32.1814 23.8027 32.6598 23.7126C33.1382 23.6225 33.6282 23.6402 34.0897 23.7628Z"
            stroke="#1C1C1C"
            stroke-width="0.999061"
          />
          <path
            d="M51.3143 25.0736C50.1093 23.4164 48.399 22.1579 46.4102 21.4581C46.5702 21.205 46.769 20.9729 47.0014 20.7699C47.3727 20.4456 47.8192 20.205 48.3055 20.0697C48.7918 19.9344 49.3025 19.9086 49.7958 19.9946C50.2891 20.0806 50.7492 20.2757 51.1395 20.5621C51.5296 20.8485 51.8384 21.2178 52.043 21.6384C52.2476 22.059 52.343 22.5202 52.3228 22.9852C52.3027 23.4502 52.1674 23.9083 51.9262 24.3227C51.7645 24.6006 51.5579 24.854 51.3143 25.0736Z"
            stroke="#1C1C1C"
            stroke-width="0.988851"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_288_3164"
            x="0"
            y="0.419922"
            width="94.0117"
            height="96.0112"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="2" dy="4" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_288_3164"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_288_3164"
              result="shape"
            />
          </filter>
        </defs>
      </Box>
    </ChakraBox>
  );
};

export default HeroSmileImageRound;
