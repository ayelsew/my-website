import { FC } from "react";

import styles from "./background2.module.css";

interface IconProps {
  color?: string
  size?: string
}

const Icon: FC<IconProps> = ({ color, size }) => {
  return (
    <div className={styles._ContainerBackground2}>
      <svg className={styles._gearBackground2} xmlns="http://www.w3.org/2000/svg" width="621" height="619" viewBox="0 0 621 619" fill="none">
        <path className={styles._spinGearBackground2} d="M649.814 251.164L649.812 251.166C611.66 289.163 565.798 308.123 512.024 308.123C458.25 308.123 412.356 289.162 374.237 251.167L374.234 251.164C336.018 213.184 316.953 167.522 316.953 114.024C316.953 60.5259 336.018 14.832 374.233 -23.1155L374.237 -23.1188C412.356 -61.1141 458.25 -80.0748 512.024 -80.0748C565.798 -80.0748 611.66 -61.1145 649.812 -23.1181L649.815 -23.1155C688.03 14.832 707.096 60.5259 707.096 114.024C707.096 167.522 688.03 213.184 649.814 251.164ZM512.024 313.123C567.122 313.123 614.251 293.638 653.339 254.711C692.492 215.799 712.096 168.863 712.096 114.024C712.096 59.187 692.494 12.2191 653.341 -26.6609C614.253 -65.5889 567.123 -85.0748 512.024 -85.0748C456.926 -85.0748 409.763 -65.5893 370.707 -26.6602C331.555 12.2197 311.953 59.1873 311.953 114.024C311.953 168.863 331.556 215.799 370.71 254.711C409.765 293.638 456.927 313.123 512.024 313.123ZM386.507 452.533L384.88 456.05C359.287 490.51 327.674 521.757 290.021 549.799L240.803 521.533C247.199 474.675 258.607 432.259 274.993 394.224L280.978 397.664L283.812 393.566C274.232 385.681 264.805 377.432 255.744 368.415C248.389 361.096 241.477 353.564 234.877 345.911L230.825 348.803L231.327 349.664C192.128 366.539 149.39 377.704 103.082 383.203L74.6681 334.24C104.304 296.162 136.124 264.64 170.119 239.647L171.619 238.545L170.993 236.793C164.131 217.569 158.797 197.719 155.386 177.099L153.067 177.289L153.189 176.162C109.834 171.459 66.2939 159.766 22.5 141.089V84.5638C66.7535 66.5433 109.639 55.1263 151.176 50.3006L155.383 50.6587C158.733 31.1206 163.621 12.1924 169.998 -6.07922L170.609 -7.82788L169.114 -8.92108C134.136 -34.4969 102.442 -66.1398 74.0553 -103.917L102.47 -152.897C150.516 -146.389 193.94 -134.683 232.747 -117.844L234.433 -117.113L235.634 -118.503C242.081 -125.96 248.598 -133.32 255.726 -140.397L255.728 -140.399C263.115 -147.75 270.701 -154.645 278.425 -161.244L277.033 -163.196L278.732 -163.948C261.148 -203.645 249.54 -247.017 243.907 -294.096L293.126 -322.378C331.448 -292.836 363.163 -261.137 388.297 -227.258L389.389 -225.786L391.121 -226.384C408.542 -232.396 426.521 -237.1 445.092 -240.353L446.941 -240.677L447.146 -242.543C451.871 -285.633 463.622 -328.955 482.374 -372.5H539.208C557.546 -327.913 569.048 -284.748 573.805 -242.95L574.018 -241.076L575.879 -240.767C596.22 -237.388 615.801 -232.175 634.766 -225.475L636.509 -224.859L637.608 -226.344C663.266 -260.996 694.959 -292.44 732.816 -320.595L782.019 -292.313C775.463 -244.402 763.683 -201.12 746.702 -162.448L748.145 -161.814L746.772 -159.891C753.876 -153.731 760.853 -147.235 767.687 -140.403L767.695 -140.395C774.561 -133.595 781.073 -126.668 787.263 -119.599L788.468 -118.223L790.145 -118.955C829.885 -136.313 873.256 -147.801 920.336 -153.373L948.735 -104.409C919.358 -66.6685 887.843 -35.4316 854.197 -10.5346L852.71 -9.43387L853.328 -7.6897C860.029 11.2142 865.236 30.697 868.615 50.9528L870.928 50.7611L870.811 51.8384C914.15 56.5407 957.706 68.2345 1001.5 86.9107V143.436C957.077 161.526 914.018 172.961 872.346 177.77L868.617 177.449C865.188 197.241 860.172 216.377 853.634 234.873L853.014 236.625L854.514 237.723C889.397 263.267 921.041 294.847 949.364 332.558L920.965 381.507C872.807 374.984 829.318 363.26 790.431 346.359L789.674 348.1L787.711 346.72C781.281 354.096 774.777 361.379 767.695 368.395L767.687 368.403C759.949 376.134 751.979 383.348 743.868 390.253L745.577 392.679C762.988 432.201 774.493 475.341 780.093 522.128L730.906 550.378C692.552 520.82 660.805 489.089 635.654 455.178L634.561 453.703L632.826 454.305C615.053 460.477 596.723 465.276 577.739 468.528L575.882 468.846L575.676 470.718C570.935 513.761 559.216 557.02 540.481 600.5H483.647C465.308 555.88 453.774 512.635 449.033 470.807L448.821 468.939L446.968 468.624C426.067 465.07 405.973 459.57 386.507 452.533ZM651.577 252.938C612.956 291.4 566.46 310.623 512.024 310.623C457.588 310.623 411.06 291.4 372.472 252.938C333.787 214.492 314.453 168.192 314.453 114.024C314.453 59.8558 333.787 13.5245 372.472 -24.8895C411.06 -63.3517 457.588 -82.5748 512.024 -82.5748C566.46 -82.5748 612.956 -63.3517 651.577 -24.8895C690.261 13.5245 709.596 59.8558 709.596 114.024C709.596 168.192 690.261 214.492 651.577 252.938Z" stroke="#383838" strokeWidth="5" />
      </svg>


      <svg className={styles._cloudBackground2} xmlns="http://www.w3.org/2000/svg" width="447" height="343" viewBox="0 0 447 343" fill="none">
        <path d="M416.952 343.029C425.645 332.572 432.511 320.171 437.153 306.541C441.794 292.911 444.12 278.322 443.995 263.616C443.87 248.911 441.298 234.381 436.426 220.865C431.967 206.916 425.052 194.261 416.145 183.752C407.123 173.524 396.529 165.46 384.943 159.999C373.28 154.228 360.756 151.324 348.124 151.463C345.656 130.766 340.053 110.773 331.587 92.4529C323.729 74.5798 313.149 58.5977 300.385 45.319C287.898 32.0301 273.532 21.4755 257.951 14.1438C241.653 6.56082 224.279 2.78071 206.78 3.00982C194.895 3.06818 183.059 4.81245 171.522 8.20569C160.652 11.7953 150.179 16.903 140.32 23.4221C130.303 30.146 120.983 38.2424 112.55 47.5458C103.982 57.178 96.4374 68.0215 90.0846 79.8344C82.5882 78.0328 74.9548 77.1622 67.3072 77.2365C50.4911 77.7429 24 76 -2 101" stroke="#383838" strokeWidth="2" />
        <path className={styles.strokeCloudEletric} d="M416.952 343.029C425.645 332.572 432.511 320.171 437.153 306.541C441.794 292.911 444.12 278.322 443.995 263.616C443.87 248.911 441.298 234.381 436.426 220.865C431.967 206.916 425.052 194.261 416.145 183.752C407.123 173.524 396.529 165.46 384.943 159.999C373.28 154.228 360.756 151.324 348.124 151.463C345.656 130.766 340.053 110.773 331.587 92.4529C323.729 74.5798 313.149 58.5977 300.385 45.319C287.898 32.0301 273.532 21.4755 257.951 14.1438C241.653 6.56082 224.279 2.78071 206.78 3.00982C194.895 3.06818 183.059 4.81245 171.522 8.20569C160.652 11.7953 150.179 16.903 140.32 23.4221C130.303 30.146 120.983 38.2424 112.55 47.5458C103.982 57.178 96.4374 68.0215 90.0846 79.8344C82.5882 78.0328 74.9548 77.1622 67.3072 77.2365C50.4911 77.7429 24 76 -2 101" stroke="#2FB5FF" strokeWidth="2" />
      </svg>
    </div>
  )
}

export default Icon;
