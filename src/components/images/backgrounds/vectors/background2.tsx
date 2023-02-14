import { FC } from "react";

interface IconProps {
  color?: string
  size?: string
}

const Icon: FC<IconProps> = ({ color, size }) => {
  return (
    <svg width="1493" height="1078" viewBox="0 0 1493 1008" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1521.81 251.164L1521.81 251.166C1483.66 289.163 1437.8 308.123 1384.02 308.123C1330.25 308.123 1284.36 289.162 1246.24 251.167L1246.23 251.164C1208.02 213.184 1188.95 167.522 1188.95 114.024C1188.95 60.5259 1208.02 14.832 1246.23 -23.1155L1246.24 -23.1188C1284.36 -61.1141 1330.25 -80.0748 1384.02 -80.0748C1437.8 -80.0748 1483.66 -61.1145 1521.81 -23.1181L1521.82 -23.1155C1560.03 14.832 1579.1 60.5259 1579.1 114.024C1579.1 167.522 1560.03 213.184 1521.81 251.164ZM1384.02 313.123C1439.12 313.123 1486.25 293.638 1525.34 254.711C1564.49 215.799 1584.1 168.863 1584.1 114.024C1584.1 59.187 1564.49 12.2191 1525.34 -26.6609C1486.25 -65.5889 1439.12 -85.0748 1384.02 -85.0748C1328.93 -85.0748 1281.76 -65.5893 1242.71 -26.6602C1203.55 12.2197 1183.95 59.1873 1183.95 114.024C1183.95 168.863 1203.56 215.799 1242.71 254.711C1281.77 293.638 1328.93 313.123 1384.02 313.123ZM1258.51 452.533L1256.88 456.05C1231.29 490.51 1199.67 521.757 1162.02 549.799L1112.8 521.533C1119.2 474.675 1130.61 432.259 1146.99 394.224L1152.98 397.664L1155.81 393.566C1146.23 385.681 1136.81 377.432 1127.74 368.415C1120.39 361.096 1113.48 353.564 1106.88 345.911L1102.82 348.803L1103.33 349.664C1064.13 366.539 1021.39 377.704 975.082 383.203L946.668 334.24C976.304 296.162 1008.12 264.64 1042.12 239.647L1043.62 238.545L1042.99 236.793C1036.13 217.569 1030.8 197.719 1027.39 177.099L1025.07 177.289L1025.19 176.162C981.834 171.459 938.294 159.766 894.5 141.089V84.5638C938.753 66.5433 981.639 55.1263 1023.18 50.3006L1027.38 50.6587C1030.73 31.1206 1035.62 12.1924 1042 -6.07922L1042.61 -7.82788L1041.11 -8.92108C1006.14 -34.4969 974.442 -66.1398 946.055 -103.917L974.47 -152.897C1022.52 -146.389 1065.94 -134.683 1104.75 -117.844L1106.43 -117.113L1107.63 -118.503C1114.08 -125.96 1120.6 -133.32 1127.73 -140.397L1127.73 -140.399C1135.12 -147.75 1142.7 -154.645 1150.42 -161.244L1149.03 -163.196L1150.73 -163.948C1133.15 -203.645 1121.54 -247.017 1115.91 -294.096L1165.13 -322.378C1203.45 -292.836 1235.16 -261.137 1260.3 -227.258L1261.39 -225.786L1263.12 -226.384C1280.54 -232.396 1298.52 -237.1 1317.09 -240.353L1318.94 -240.677L1319.15 -242.543C1323.87 -285.633 1335.62 -328.955 1354.37 -372.5H1411.21C1429.55 -327.913 1441.05 -284.748 1445.81 -242.95L1446.02 -241.076L1447.88 -240.767C1468.22 -237.388 1487.8 -232.175 1506.77 -225.475L1508.51 -224.859L1509.61 -226.344C1535.27 -260.996 1566.96 -292.44 1604.82 -320.595L1654.02 -292.313C1647.46 -244.402 1635.68 -201.12 1618.7 -162.448L1620.14 -161.814L1618.77 -159.891C1625.88 -153.731 1632.85 -147.235 1639.69 -140.403L1639.7 -140.395C1646.56 -133.595 1653.07 -126.668 1659.26 -119.599L1660.47 -118.223L1662.14 -118.955C1701.88 -136.313 1745.26 -147.801 1792.34 -153.373L1820.74 -104.409C1791.36 -66.6685 1759.84 -35.4316 1726.2 -10.5346L1724.71 -9.43387L1725.33 -7.6897C1732.03 11.2142 1737.24 30.697 1740.61 50.9528L1742.93 50.7611L1742.81 51.8384C1786.15 56.5407 1829.71 68.2345 1873.5 86.9107V143.436C1829.08 161.526 1786.02 172.961 1744.35 177.77L1740.62 177.449C1737.19 197.241 1732.17 216.377 1725.63 234.873L1725.01 236.625L1726.51 237.723C1761.4 263.267 1793.04 294.847 1821.36 332.558L1792.97 381.507C1744.81 374.984 1701.32 363.26 1662.43 346.359L1661.67 348.1L1659.71 346.72C1653.28 354.096 1646.78 361.379 1639.7 368.395L1639.69 368.403C1631.95 376.134 1623.98 383.348 1615.87 390.253L1617.58 392.679C1634.99 432.201 1646.49 475.341 1652.09 522.128L1602.91 550.378C1564.55 520.82 1532.81 489.089 1507.65 455.178L1506.56 453.703L1504.83 454.305C1487.05 460.477 1468.72 465.276 1449.74 468.528L1447.88 468.846L1447.68 470.718C1442.94 513.761 1431.22 557.02 1412.48 600.5H1355.65C1337.31 555.88 1325.77 512.635 1321.03 470.807L1320.82 468.939L1318.97 468.624C1298.07 465.07 1277.97 459.57 1258.51 452.533ZM1523.58 252.938C1484.96 291.4 1438.46 310.623 1384.02 310.623C1329.59 310.623 1283.06 291.4 1244.47 252.938C1205.79 214.492 1186.45 168.192 1186.45 114.024C1186.45 59.8558 1205.79 13.5245 1244.47 -24.8895C1283.06 -63.3517 1329.59 -82.5748 1384.02 -82.5748C1438.46 -82.5748 1484.96 -63.3517 1523.58 -24.8895C1562.26 13.5245 1581.6 59.8558 1581.6 114.024C1581.6 168.192 1562.26 214.492 1523.58 252.938Z" stroke="#383838" stroke-width="5" />
      <g filter="url(#filter0_d_1522_2)">
        <path d="M345.642 886.759L345.908 888.988L348.152 888.963C360.377 888.829 372.513 891.638 383.834 897.24L383.855 897.25L383.877 897.261C395.128 902.564 405.446 910.407 414.253 920.387C422.927 930.626 429.682 942.979 434.044 956.626L434.058 956.67L434.074 956.713C438.848 969.957 441.373 984.208 441.495 998.638C441.618 1013.07 439.335 1027.38 434.786 1040.73C430.237 1054.09 423.516 1066.22 415.029 1076.43C406.545 1086.64 396.469 1094.71 385.397 1100.22C374.24 1105.66 362.324 1108.46 350.301 1108.5L67.3072 1108.5L67.2954 1108.5C50.9892 1108.58 34.8215 1104.76 19.7462 1097.26L18.6322 1099.49L19.7462 1097.26C-2.45961 1086.2 -21.4934 1067.55 -34.9087 1043.58C-48.3247 1019.6 -55.5 991.41 -55.5 962.545C-55.5 933.681 -48.3247 905.487 -34.9087 881.512C-21.4934 857.537 -2.45961 838.887 19.7462 827.835L19.7861 827.816L19.8253 827.794C34.7884 819.669 50.9545 815.234 67.357 814.736C74.7895 814.666 82.2099 815.513 89.5004 817.265L91.3738 817.715L92.2864 816.019C98.5486 804.374 105.98 793.695 114.41 784.216C122.708 775.063 131.87 767.106 141.706 760.502C151.373 754.112 161.631 749.109 172.266 745.592C183.569 742.272 195.158 740.567 206.792 740.51L206.802 740.51L206.812 740.51C223.924 740.286 240.925 743.981 256.89 751.408C272.168 758.598 286.28 768.959 298.564 782.031L298.573 782.041L298.583 782.051C311.131 795.106 321.552 810.839 329.299 828.459L329.308 828.48L329.318 828.502C337.67 846.575 343.203 866.314 345.642 886.759Z" stroke="#383838" stroke-width="5" shape-rendering="crispEdges" />
      </g>
      <defs>
        <filter id="filter0_d_1522_2" x="-61" y="731" width="510" height="381" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dx="1" dy="-3" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.1 0 0 0 0 0.1 0 0 0 0 0.1 0 0 0 0.63 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1522_2" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1522_2" result="shape" />
        </filter>
      </defs>
    </svg>

  )
}

export default Icon;
