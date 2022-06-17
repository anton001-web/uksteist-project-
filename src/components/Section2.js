import React, {useEffect, useState} from 'react'
import s from '../styles/_section2.module.scss'
import {modalData} from "./utils/modalData";
import ReactTooltip from "react-tooltip";

const areasInfo = [
    {title: 'Лес', image: './assets/images/forest.png', subTitle: 'Жизнь в окружении леса'},
    {title: 'Море', image: './assets/images/sea.png', subTitle: 'В 311 метрах от дома ваше море'},
    {title: 'Воздух', image: './assets/images/air.png', subTitle: 'Вдыхайте морской и хвойный воздух'}
]

const Section2 = () => {
    // const [tooltipVisible, setTooltipVisible] = useState(true)
    // const tooltipRef = React.createRef()
    //
    // const tooltipToggle = (e) => {
    //     setTooltipVisible(!tooltipVisible)
    //     if(tooltipVisible) {
    //         e.target.closest('div').classList.add(s.active)
    //     } else {
    //         e.target.closest('div').classList.remove(s.active)
    //     }
    // }

    return (
        <section className={s.section}>
            <div className={s.section_content}>
                <div className={s.section_areas}>
                    {
                        areasInfo && areasInfo.map((item, index) => (
                            <div className={s.areas_item} key={index}>
                                <img src={item.image} alt="" width='50px' height='50px'/>
                                <h2 className={s.item_title}>{item.title}</h2>
                                <h3 className={s.item_subTitle}>{item.subTitle}</h3>
                            </div>
                        ))
                    }
                </div>
                <div className={s.section_seaInfo}>
                    <div className={s.seaInfo}>
                        <span>311 м</span>
                        <img src="./assets/images/doubleArrow.png" alt=""/>
                        <span>Море</span>
                    </div>
                </div>
                <div className={s.section_houses}>
                    <div className={s.houses_block}>
                        <svg viewBox="-595 -97 1920 945" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path data-area="1" d="M705.5 107L717 62L638.5 56H603.5L478.5 40.5L518.5 151.5L638.5 149L705.5 107Z" fill="white"></path>
                            <path data-area="2" d="M648.689 329.549L530.5 328.5L549 169L586 169L647 164.5L701.5 135.5L648.689 329.549Z" fill="white"></path>
                            <path data-area="3" d="M469 453.546L594.5 515L647.5 333L571 332H528L469 453.546Z" fill="white"></path>
                            <path data-area="4" d="M434.625 596.218C468.426 605.273 564.344 630.506 567 631L594.5 523L457.561 457L380 503.303L434.625 596.218Z" fill="white"></path>
                            <path data-area="5" d="M449.5 607C438.772 637.111 408.143 710.254 404.5 719.5L518.5 821.5L566 637L449.5 607Z" fill="white"></path>
                            <path data-area="6" d="M365.5 519C334.591 535.072 258.929 576.354 254 579.5L391 708.5L429 629.5L365.5 519Z" fill="white"></path>
                            <path data-area="7" d="M222 521.5C202.7 502.461 160.937 463.619 158 460L275 294.5L370 478.283L282 537.5L222 521.5Z" fill="white"></path>
                            <path data-area="8" d="M313.5 245.5L281 292L378.044 473L450.5 428.5L500.5 322.5L313.5 245.5Z" fill="white"></path>
                            <path data-area="10" d="M267.5 28L305.5 240L67 178L111 21L267.5 28Z" fill="white"></path>
                            <path data-area="11" d="M297 250.5C243.533 315.062 136.119 463.773 134.5 465L23.5 360L64 199L297 250.5Z" fill="white"></path>
                            <path data-area="9" d="M280.5 30.0003C280.345 30 280.342 30 280.5 30L280.5 30.0003C285.248 30.009 432.323 30.2849 457.5 39L480 122.5L490 153.5L503.5 175L305.5 179L280.5 30.0003Z" fill="white"></path>

                            <path d="M378.274 110.88C382.199 110.88 385.485 111.776 388.13 113.568C390.818 115.36 392.845 117.941 394.21 121.312C395.575 124.64 396.258 128.651 396.258 133.344C396.258 138.379 395.426 142.603 393.762 146.016C392.098 149.429 389.773 152.011 386.786 153.76C383.799 155.467 380.322 156.32 376.354 156.32C374.434 156.32 372.599 156.149 370.85 155.808C369.143 155.467 367.586 154.869 366.178 154.016L367.522 151.392C368.674 152.117 370.018 152.651 371.554 152.992C373.09 153.291 374.69 153.44 376.354 153.44C381.389 153.44 385.421 151.819 388.45 148.576C391.479 145.291 392.994 140.384 392.994 133.856C392.994 132.832 392.93 131.573 392.802 130.08C392.674 128.587 392.397 127.115 391.97 125.664L393.122 125.984C392.823 128.459 391.991 130.571 390.626 132.32C389.261 134.027 387.511 135.349 385.378 136.288C383.287 137.227 380.941 137.696 378.338 137.696C375.351 137.696 372.727 137.163 370.466 136.096C368.247 134.987 366.498 133.429 365.218 131.424C363.981 129.419 363.362 127.072 363.362 124.384C363.362 121.653 364.002 119.285 365.282 117.28C366.605 115.232 368.375 113.653 370.594 112.544C372.855 111.435 375.415 110.88 378.274 110.88ZM378.402 113.696C376.055 113.696 374.007 114.144 372.258 115.04C370.509 115.893 369.122 117.109 368.098 118.688C367.117 120.267 366.626 122.144 366.626 124.32C366.626 127.52 367.714 130.08 369.89 132C372.066 133.92 375.031 134.88 378.786 134.88C381.218 134.88 383.373 134.411 385.25 133.472C387.127 132.533 388.578 131.253 389.602 129.632C390.669 128.011 391.202 126.197 391.202 124.192C391.202 122.443 390.711 120.779 389.73 119.2C388.749 117.579 387.319 116.256 385.442 115.232C383.565 114.208 381.218 113.696 378.402 113.696Z" fill="#F8F8F8"></path>
                            <path d="M577.739 130V86.608L579.211 88.144H566.795V85.2H581.003V130H577.739Z" fill="#F8F8F8"></path>
                            <path d="M573.093 289V286.696L592.037 267.88C593.829 266.088 595.173 264.531 596.069 263.208C596.965 261.843 597.562 260.584 597.861 259.432C598.202 258.28 598.373 257.149 598.373 256.04C598.373 253.224 597.413 251.005 595.493 249.384C593.573 247.72 590.757 246.888 587.045 246.888C584.229 246.888 581.754 247.315 579.621 248.168C577.53 249.021 575.717 250.323 574.181 252.072L571.877 250.024C573.584 248.061 575.738 246.547 578.341 245.48C580.986 244.413 583.973 243.88 587.301 243.88C590.245 243.88 592.784 244.371 594.917 245.352C597.093 246.291 598.757 247.656 599.909 249.448C601.104 251.197 601.701 253.288 601.701 255.72C601.701 257.171 601.488 258.6 601.061 260.008C600.677 261.373 599.952 262.824 598.885 264.36C597.861 265.896 596.368 267.645 594.405 269.608L576.613 287.336L575.525 286.056H603.877V289H573.093Z" fill="#F8F8F8"></path>
                            <path d="M730.5 50.5L523.5 842L3.5 368.5L98 4L730.5 50.5Z" stroke="white" stroke-opacity="0.6" stroke-width="6"></path>
                            <path d="M185.626 156V112.608L187.098 114.144H174.682V111.2H188.89V156H185.626ZM217.825 156.32C214.411 156.32 211.382 155.403 208.737 153.568C206.091 151.733 204.022 149.131 202.529 145.76C201.035 142.347 200.289 138.293 200.289 133.6C200.289 128.907 201.035 124.875 202.529 121.504C204.022 118.091 206.091 115.467 208.737 113.632C211.382 111.797 214.411 110.88 217.825 110.88C221.281 110.88 224.31 111.797 226.913 113.632C229.558 115.467 231.627 118.091 233.121 121.504C234.614 124.875 235.361 128.907 235.361 133.6C235.361 138.293 234.614 142.347 233.121 145.76C231.627 149.131 229.558 151.733 226.913 153.568C224.31 155.403 221.281 156.32 217.825 156.32ZM217.825 153.312C220.683 153.312 223.179 152.544 225.313 151.008C227.446 149.429 229.11 147.168 230.305 144.224C231.499 141.28 232.097 137.739 232.097 133.6C232.097 129.419 231.499 125.877 230.305 122.976C229.11 120.032 227.446 117.792 225.313 116.256C223.179 114.677 220.683 113.888 217.825 113.888C215.009 113.888 212.513 114.677 210.337 116.256C208.203 117.792 206.539 120.032 205.345 122.976C204.15 125.877 203.553 129.419 203.553 133.6C203.553 137.739 204.15 141.28 205.345 144.224C206.539 147.168 208.203 149.429 210.337 151.008C212.513 152.544 215.009 153.312 217.825 153.312Z" fill="#F8F8F8"></path>
                            <path d="M130.908 327V283.608L132.38 285.144H119.964V282.2H134.172V327H130.908ZM153.571 327V283.608L155.043 285.144H142.627V282.2H156.835V327H153.571Z" fill="#F8F8F8"></path>
                            <path d="M270.862 462L290.574 418.736L291.726 420.144H263.118L264.782 418.608V428.72H261.582V417.2H293.71V419.504L274.446 462H270.862Z" fill="#F8F8F8"></path>
                            <path d="M391.441 397.32C387.9 397.32 384.871 396.808 382.353 395.784C379.836 394.76 377.895 393.309 376.529 391.432C375.207 389.555 374.545 387.315 374.545 384.712C374.545 382.195 375.207 380.04 376.529 378.248C377.852 376.456 379.772 375.091 382.289 374.152C384.807 373.171 387.857 372.68 391.441 372.68C395.025 372.68 398.076 373.171 400.593 374.152C403.153 375.091 405.095 376.456 406.417 378.248C407.783 380.04 408.465 382.195 408.465 384.712C408.465 387.315 407.783 389.555 406.417 391.432C405.052 393.309 403.089 394.76 400.529 395.784C398.012 396.808 394.983 397.32 391.441 397.32ZM391.441 394.504C395.751 394.504 399.121 393.629 401.553 391.88C403.985 390.131 405.201 387.741 405.201 384.712C405.201 381.725 403.985 379.357 401.553 377.608C399.121 375.859 395.751 374.984 391.441 374.984C387.132 374.984 383.783 375.859 381.393 377.608C379.004 379.357 377.809 381.725 377.809 384.712C377.809 387.741 379.004 390.131 381.393 391.88C383.783 393.629 387.132 394.504 391.441 394.504ZM391.441 374.536C388.199 374.536 385.425 374.109 383.121 373.256C380.86 372.36 379.132 371.08 377.937 369.416C376.743 367.752 376.145 365.768 376.145 363.464C376.145 361.075 376.764 359.027 378.001 357.32C379.281 355.571 381.073 354.227 383.377 353.288C385.681 352.349 388.369 351.88 391.441 351.88C394.556 351.88 397.265 352.349 399.569 353.288C401.873 354.227 403.665 355.571 404.945 357.32C406.225 359.027 406.865 361.075 406.865 363.464C406.865 365.768 406.247 367.752 405.009 369.416C403.815 371.08 402.065 372.36 399.761 373.256C397.457 374.109 394.684 374.536 391.441 374.536ZM391.441 372.296C395.281 372.296 398.268 371.507 400.401 369.928C402.535 368.349 403.601 366.237 403.601 363.592C403.601 360.819 402.492 358.643 400.273 357.064C398.097 355.485 395.153 354.696 391.441 354.696C387.772 354.696 384.849 355.485 382.673 357.064C380.497 358.643 379.409 360.797 379.409 363.528C379.409 366.216 380.455 368.349 382.545 369.928C384.679 371.507 387.644 372.296 391.441 372.296Z" fill="#F8F8F8"></path>
                            <path d="M545.796 440.32C542.511 440.32 539.439 439.765 536.58 438.656C533.764 437.547 531.567 436.096 529.988 434.304L531.652 431.808C533.018 433.387 534.938 434.709 537.412 435.776C539.93 436.8 542.724 437.312 545.796 437.312C549.807 437.312 552.858 436.416 554.948 434.624C557.082 432.832 558.148 430.421 558.148 427.392C558.148 424.405 557.082 422.016 554.948 420.224C552.858 418.389 549.572 417.472 545.092 417.472H542.276V415.104L556.548 396.864L556.996 398.144H531.652V395.2H559.748V397.504L545.54 415.744L544.132 414.72H545.54C550.874 414.72 554.863 415.893 557.508 418.24C560.154 420.587 561.476 423.637 561.476 427.392C561.476 429.867 560.879 432.085 559.684 434.048C558.532 436.011 556.783 437.547 554.436 438.656C552.132 439.765 549.252 440.32 545.796 440.32Z" fill="#F8F8F8"></path>
                            <path d="M464.815 550.584V548.216L489.135 518.2H492.783L468.527 548.216L466.735 547.704H502.959V550.584H464.815ZM490.351 563V550.584L490.415 547.704V536.76H493.551V563H490.351Z" fill="#F8F8F8"></path>
                            <path d="M475.564 691.32C472.322 691.32 469.271 690.765 466.412 689.656C463.596 688.547 461.399 687.096 459.82 685.304L461.484 682.808C462.85 684.387 464.77 685.709 467.244 686.776C469.719 687.8 472.471 688.312 475.5 688.312C479.639 688.312 482.754 687.373 484.844 685.496C486.935 683.619 487.98 681.187 487.98 678.2C487.98 676.067 487.49 674.232 486.508 672.696C485.527 671.16 483.863 669.987 481.516 669.176C479.17 668.323 475.97 667.896 471.916 667.896H462.828L465.196 646.2H488.94V649.144H466.54L468.14 647.608L466.028 666.616L464.492 664.952H472.62C477.186 664.952 480.812 665.507 483.5 666.616C486.231 667.683 488.194 669.197 489.388 671.16C490.626 673.123 491.244 675.427 491.244 678.072C491.244 680.547 490.668 682.787 489.516 684.792C488.364 686.797 486.615 688.397 484.268 689.592C481.964 690.744 479.063 691.32 475.564 691.32Z" fill="#F8F8F8"></path>
                            <path d="M353.754 624.32C349.829 624.32 346.522 623.424 343.834 621.632C341.189 619.84 339.183 617.259 337.818 613.888C336.453 610.517 335.77 606.507 335.77 601.856C335.77 596.779 336.602 592.555 338.266 589.184C339.93 585.771 342.255 583.211 345.242 581.504C348.229 579.755 351.706 578.88 355.674 578.88C357.594 578.88 359.429 579.051 361.178 579.392C362.927 579.733 364.485 580.331 365.85 581.184L364.506 583.808C363.354 583.083 362.01 582.571 360.474 582.272C358.981 581.931 357.381 581.76 355.674 581.76C350.639 581.76 346.607 583.403 343.578 586.688C340.549 589.931 339.034 594.816 339.034 601.344C339.034 602.325 339.098 603.584 339.226 605.12C339.354 606.613 339.631 608.085 340.058 609.536L338.906 609.216C339.205 606.741 340.037 604.629 341.402 602.88C342.767 601.131 344.517 599.808 346.65 598.912C348.783 597.973 351.13 597.504 353.69 597.504C356.677 597.504 359.279 598.059 361.498 599.168C363.759 600.235 365.509 601.771 366.746 603.776C368.026 605.781 368.666 608.128 368.666 610.816C368.666 613.547 368.005 615.936 366.682 617.984C365.402 619.989 363.631 621.547 361.37 622.656C359.151 623.765 356.613 624.32 353.754 624.32ZM353.626 621.504C355.973 621.504 358.021 621.077 359.77 620.224C361.519 619.328 362.885 618.091 363.866 616.512C364.89 614.891 365.402 613.013 365.402 610.88C365.402 607.68 364.314 605.12 362.138 603.2C360.005 601.28 357.039 600.32 353.242 600.32C350.81 600.32 348.655 600.789 346.778 601.728C344.901 602.667 343.429 603.947 342.362 605.568C341.338 607.189 340.826 609.003 340.826 611.008C340.826 612.757 341.317 614.443 342.298 616.064C343.279 617.643 344.709 618.944 346.586 619.968C348.506 620.992 350.853 621.504 353.626 621.504Z" fill="#F8F8F8"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Section2