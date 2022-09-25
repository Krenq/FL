import Image from "next/image"
import one from '../../images/templates/rembg.png'
import two from '../../images/templates/2rembg.png'


const Clubs = () => {
	return (
		<section className="relative bg-nude-2 mt-16 .1x1:mt-14">
			<div className="absolute right-0 bottom-0 ..6x2:w-40 ..6x2:h-40 .4x1:-bottom-32">
				<Image className="object-cover " src={one} alt="specialOffersImg" />
			</div>
			<div className="absolute left-0 top-0 ..7x2:-top-10 ..6x2:w-40 ..6x2:h-40 .4x1:-bottom-32">
				<Image className="object-cover " src={two} alt="specialOffersImg" />
			</div>


			<svg className=" ..6x2:h-36  absolute left-1/2 ability top-0" width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
				<circle cx="70" cy="70" r="68" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="bevel" strokeDasharray="3 6 9 12" />
				<path d="M102.111 65.684C101.458 63.9926 100.551 62.6195 99.3883 61.5718C98.2685 60.4913 96.974 59.6994 95.5068 59.1973C94.0813 58.6966 92.5613 58.4469 90.9481 58.4469C88.0693 58.4469 85.5277 59.1767 83.3307 60.641C81.1408 62.0628 79.4305 63.9465 78.2016 66.289L78.2005 66.2913C77.0104 68.6329 76.4156 71.1476 76.4156 73.8325C76.4156 76.9303 77.0277 79.637 78.2591 81.946L78.2598 81.9472C79.4894 84.2142 81.1633 85.9853 83.2809 87.2559L83.2808 87.2559L101.925 65.7563M102.111 65.684C102.112 65.684 102.112 65.6841 102.112 65.6842L101.925 65.7563M102.111 65.684C102.111 65.6836 102.111 65.6831 102.111 65.6827L101.925 65.7563M102.111 65.684C102.768 67.3441 103.092 69.3608 103.092 71.7281V71.9247L102.895 71.9281L83.5274 72.2659M101.925 65.7563C102.57 67.3867 102.892 69.3773 102.892 71.7281L83.3269 72.0694M83.5274 72.2659C83.5271 72.2006 83.5269 72.1351 83.5269 72.0694H83.3269M83.5274 72.2659L83.3304 72.2693L83.3269 72.0694M83.5274 72.2659C83.5415 74.749 83.824 76.9581 84.3719 78.895M83.3269 72.0694C83.3269 74.6477 83.6113 76.9417 84.18 78.9513M101.47 80.7144L101.621 80.846C101.624 80.8425 101.627 80.8389 101.629 80.8354L101.47 80.7144ZM101.47 80.7144L101.339 80.8652L101.347 80.8726C101.389 80.8203 101.43 80.7675 101.47 80.7144ZM84.18 78.9513L84.3715 78.8935C84.3716 78.894 84.3718 78.8945 84.3719 78.895M84.18 78.9513C84.7867 80.9608 85.7535 82.5154 87.0806 83.615C88.4077 84.7146 90.1329 85.2644 92.2563 85.2644C93.28 85.2644 94.3606 85.0938 95.4981 84.7525M84.18 78.9513L84.3724 78.8968C84.3723 78.8962 84.3721 78.8956 84.3719 78.895M84.3719 78.895C84.9698 80.8744 85.9178 82.3918 87.2082 83.461C88.4917 84.5244 90.1683 85.0644 92.2563 85.0644C93.2571 85.0644 94.3177 84.8977 95.4387 84.5615M95.4981 84.7525L95.4367 84.5622C95.4374 84.5619 95.438 84.5617 95.4387 84.5615M95.4981 84.7525C96.6735 84.3733 97.7731 83.8425 98.7969 83.16L94.8089 88.4724M95.4981 84.7525L95.4407 84.5609C95.44 84.5611 95.4394 84.5613 95.4387 84.5615M95.4387 84.5615C96.5959 84.188 97.6781 83.6654 98.6859 82.9936L98.6887 82.9917C99.7319 82.3211 100.605 81.5216 101.311 80.5934L101.44 80.4231L101.601 80.5636L103.364 82.0992L103.497 82.2147L103.4 82.3609C102.25 84.0858 100.924 85.452 99.4197 86.4545L99.4167 86.4565L99.4167 86.4565C97.922 87.4146 96.386 88.0874 94.8089 88.4724M94.8089 88.4724C94.8099 88.4721 94.8108 88.4719 94.8118 88.4716L94.7588 88.2788L94.8061 88.4731C94.8071 88.4728 94.808 88.4726 94.8089 88.4724ZM36.9879 85.2922L36.8 85.3036V85.4919V87.9944V88.1944H37H52.4131C56.1488 88.1944 59.399 87.6226 62.1588 86.4727C64.9105 85.3262 67.1906 83.814 68.9943 81.9334C70.8329 80.0183 72.1941 77.8524 73.076 75.4367C73.9561 73.026 74.3963 70.5382 74.3963 67.9744C74.3963 64.9183 73.8805 62.1428 72.8453 59.6508C71.8101 57.1586 70.2945 55.0477 68.2992 53.3208C66.3048 51.5567 63.8914 50.2171 61.063 49.2998C58.2337 48.3822 55.0464 47.925 51.5031 47.925L51.5023 47.925L36.9992 47.9819L36.8 47.9827V48.1819V51.31V51.5229L37.0125 51.5096C37.6181 51.4718 38.2998 51.4339 39.0575 51.396C39.7286 51.3624 40.3553 51.3289 40.9376 51.2953C40.9045 51.8176 40.8714 52.426 40.8384 53.1202C40.8003 53.8821 40.7812 54.6817 40.7812 55.5187V79.1788C40.7812 80.5757 40.7057 81.7202 40.5565 82.6152C40.4107 83.49 40.069 84.1228 39.5482 84.5395L39.5481 84.5394L39.543 84.5438C39.0626 84.9555 38.2261 85.2172 36.9879 85.2922ZM63.4067 80.0748L63.4048 80.0771C62.1725 81.6081 60.6607 82.8028 58.8673 83.6621C57.0784 84.5193 55.0233 84.9506 52.6975 84.9506H52.6959H52.6944H52.6928H52.6912H52.6897H52.6881H52.6865H52.6849H52.6833H52.6817H52.6801H52.6785H52.6769H52.6753H52.6737H52.6721H52.6704H52.6688H52.6672H52.6655H52.6639H52.6622H52.6606H52.6589H52.6573H52.6556H52.6539H52.6523H52.6506H52.6489H52.6472H52.6455H52.6438H52.6421H52.6404H52.6387H52.637H52.6353H52.6335H52.6318H52.6301H52.6284H52.6266H52.6249H52.6231H52.6214H52.6196H52.6179H52.6161H52.6143H52.6125H52.6108H52.609H52.6072H52.6054H52.6036H52.6018H52.6H52.5982H52.5964H52.5946H52.5927H52.5909H52.5891H52.5872H52.5854H52.5836H52.5817H52.5799H52.578H52.5761H52.5743H52.5724H52.5705H52.5687H52.5668H52.5649H52.563H52.5611H52.5592H52.5573H52.5554H52.5535H52.5516H52.5496H52.5477H52.5458H52.5438H52.5419H52.54H52.538H52.5361H52.5341H52.5321H52.5302H52.5282H52.5262H52.5243H52.5223H52.5203H52.5183H52.5163H52.5143H52.5123H52.5103H52.5083H52.5063H52.5042H52.5022H52.5002H52.4981H52.4961H52.4941H52.492H52.49H52.4879H52.4858H52.4838H52.4817H52.4796H52.4776H52.4755H52.4734H52.4713H52.4692H52.4671H52.465H52.4629H52.4608H52.4587H52.4565H52.4544H52.4523H52.4501H52.448H52.4459H52.4437H52.4416H52.4394H52.4373H52.4351H52.4329H52.4307H52.4286H52.4264H52.4242H52.422H52.4198H52.4176H52.4154H52.4132H52.411H52.4088H52.4065H52.4043H52.4021H52.3999H52.3976H52.3954H52.3931H52.3909H52.3886H52.3864H52.3841H52.3818H52.3796H52.3773H52.375H52.3727H52.3704H52.3681H52.3658H52.3635H52.3612H52.3589H52.3566H52.3543H52.3519H52.3496H52.3473H52.3449H52.3426H52.3402H52.3379H52.3355H52.3332H52.3308H52.3284H52.3261H52.3237H52.3213H52.3189H52.3165H52.3141H52.3117H52.3093H52.3069H52.3045H52.3021H52.2997H52.2973H52.2948H52.2924H52.29H52.2875H52.2851H52.2826H52.2802H52.2777H52.2752H52.2728H52.2703H52.2678H52.2653H52.2628H52.2604H52.2579H52.2554H52.2529H52.2504H52.2478H52.2453H52.2428H52.2403H52.2378H52.2352H52.2327H52.2301H52.2276H52.225H52.2225H52.2199H52.2174H52.2148H52.2122H52.2096H52.2071H52.2045H52.2019H52.1993H52.1967H52.1941H52.1915H52.1889H52.1863H52.1836H52.181H52.1784H52.1757H52.1731H52.1705H52.1678H52.1652H52.1625H52.1599H52.1572H52.1545H52.1518H52.1492H52.1465H52.1438H52.1411H52.1384H52.1357H52.133H52.1303H52.1276H52.1249H52.1222H52.1194H52.1167H52.114H52.1112H52.1085H52.1058H52.103H52.1002H52.0975H52.0947H52.092H52.0892H52.0864H52.0836H52.0808H52.078H52.0753H52.0725H52.0697H52.0668H52.064H52.0612H52.0584H52.0556H52.0527H52.0499H52.0471H52.0442H52.0414H52.0385H52.0357H52.0328H52.03H52.0271H52.0242H52.0213H52.0185H52.0156H52.0127H52.0098H52.0069H52.004H52.0011H51.9982H51.9953H51.9923H51.9894H51.9865H51.9836H51.9806H51.9777H51.9747H51.9718H51.9688H51.9659H51.9629H51.9599H51.957H51.954H51.951H51.948H51.945H51.942H51.939H51.936H51.933H51.93H51.927H51.924H51.921H51.9179H51.9149H51.9119H51.9088H51.9058H51.9027H51.8997H51.8966H51.8936H51.8905H51.8874H51.8843H51.8813H51.8782H51.8751H51.872H51.8689H51.8658H51.8627H51.8596H51.8565H51.8533H51.8502H51.8471H51.844H51.8408H51.8377H51.8345H51.8314H51.8282H51.8251H51.8219H51.8187H51.8156H51.8124H51.8092H51.806H51.8028H51.7996H51.7964H51.7932H51.79H51.7868H51.7836H51.7804H51.7772H51.7739H51.7707H51.7675H51.7642H51.761H51.7577H51.7545H51.7512H51.748H51.7447H51.7414H51.7381H51.7349H51.7316H51.7283H51.725H51.7217H51.7184H51.7151H51.7118H51.7085H51.7052H51.7018H51.6985H51.6952H51.6918H51.6885H51.6851H51.6818H51.6784H51.6751H51.6717H51.6684H51.665H51.6616H51.6582H51.6548H51.6515H51.6481H51.6447H51.6413H51.6379H51.6344H51.631H51.6276H51.6242H51.6208H51.6173H51.6139H51.6105H51.607H51.6036H51.6001H51.5966H51.5932H51.5897H51.5862H51.5828H51.5793H51.5758H51.5723H51.5688H51.5653H51.5618H51.5583H51.5548H51.5513H51.5478H51.5443H51.5407H51.5372H51.5337H51.5301H51.5266H51.523H51.5195H51.5159H51.5124H51.5088H51.5052H51.5016H51.4981H51.4945H51.4909H51.4873H51.4837H51.4801H51.4765H51.4729H51.4693H51.4657H51.462H51.4584H51.4548H51.4511H51.4475H51.4439H51.4402H51.4366H51.4329H51.4292H51.4256H51.4219H51.4182H51.4145H51.4109H51.4072H51.4035H51.3998H51.3961H51.3924H51.3887H51.385H51.3812H51.3775H51.3738H51.3701H51.3663H51.3626H51.3588H51.3551H51.3513H51.3476H51.3438H51.34H51.3363H51.3325H51.3289H51.3254H51.3218H51.3183H51.3147H51.3111H51.3076H51.304H51.3004H51.2968H51.2933H51.2897H51.2861H51.2825H51.2789H51.2753H51.2718H51.2682H51.2646H51.261H51.2574H51.2538H51.2502H51.2466H51.243H51.2393H51.2357H51.2321H51.2285H51.2249H51.2213H51.2176H51.214H51.2104H51.2068H51.2031H51.1995H51.1959H51.1922H51.1886H51.1849H51.1813H51.1776H51.174H51.1703H51.1667H51.163H51.1594H51.1557H51.1521H51.1484H51.1447H51.1411H51.1374H51.1337H51.13H51.1264H51.1227H51.119H51.1153H51.1116H51.1079H51.1042H51.1006H51.0969H51.0932H51.0895H51.0858H51.0821H51.0784H51.0746H51.0709H51.0672H51.0635H51.0598H51.0561H51.0524H51.0486H51.0449H51.0412H51.0375H51.0337H51.03H51.0263H51.0225H51.0188H51.015H51.0113H51.0075H51.0038H51H50.9963H50.9925H50.9888H50.985H50.9813H50.9775H50.9737H50.97H50.9662H50.9624H50.9586H50.9549H50.9511H50.9473H50.9435H50.9397H50.9359H50.9322H50.9284H50.9246H50.9208H50.917H50.9132H50.9094H50.9056H50.9018H50.8979H50.8941H50.8903H50.8865H50.8827H50.8789H50.875H50.8712H50.8674H50.8636H50.8597H50.8559H50.8521H50.8482H50.8444H50.8405H50.8367H50.8328H50.829H50.8251H50.8213H50.8174H50.8136H50.8097H50.8059H50.802H50.7981H50.7943H50.7904H50.7865H50.7826H50.7788H50.7749H50.771H50.7671H50.7632H50.7594H50.7555H50.7516H50.7477H50.7438H50.7399H50.736H50.7321H50.7282H50.7243H50.7204H50.7164H50.7125H50.7086H50.7047H50.7008H50.6969H50.6929H50.689H50.6851H50.6811H50.6772H50.6733H50.6693H50.6654H50.6615H50.6575H50.6536H50.6496H50.6457H50.6417H50.6378H50.6338H50.6298H50.6259H50.6219H50.6179H50.614H50.61H50.606H50.6021H50.5981H50.5941H50.5901H50.5861H50.5822H50.5782H50.5742H50.5702H50.5662H50.5622H50.5582H50.5542H50.5502H50.5462H50.5422H50.5382H50.5342H50.5302H50.5261H50.5221H50.5181H50.5141H50.5101H50.506H50.502H50.498H50.4939H50.4899H50.4859H50.4818H50.4778H50.4737H50.4697H50.4656H50.4616H50.4575H50.4535H50.4494H50.4454H50.4413H50.4372H50.4332H50.4291H50.425H50.421H50.4169H50.4128H50.4087H50.4047H50.4006H50.3965H50.3924H50.3883H50.3842H50.3801H50.376H50.3719H50.3678H50.3637H50.3596H50.3555H50.3514H50.3473H50.3432H50.3391H50.3349H50.3308H50.3267H50.3226H50.3185H50.3143H50.3102H50.3061H50.3019H50.2978H50.2937H50.2895H50.2854H50.2812H50.2771H50.2729H50.2688H50.2646H50.2605H50.2563H50.2521H50.248H50.2438H50.2396H50.2355H50.2313H50.2271H50.223H50.2188H50.2146H50.2104H50.2062H50.202H50.1978H50.1937H50.1895H50.1853H50.1811H50.1769H50.1727H50.1685H50.1643H50.16H50.1558H50.1516H50.1474H50.1432H50.139H50.1347H50.1305H50.1263H50.1221H50.1178H50.1136H50.1094H50.1051H50.1009H50.0967H50.0924H50.0882H50.0839H50.0797H50.0754H50.0712H50.0669H50.0626H50.0584H50.0541H50.0499H50.0456H50.0413H50.037H50.0328H50.0285H50.0242H50.0199H50.0157H50.0114H50.0071H50.0028H49.9985H49.9942H49.9899H49.9856H49.9813H49.977H49.9727H49.9684H49.9641H49.9598H49.9555H49.9512H49.9468H49.9425H49.9382H49.9339H49.9295H49.9252H49.9209H49.9166H49.9122H49.9079H49.9035H49.8992H49.8949H49.8905H49.8862H49.8818H49.8775H49.8731H49.8688H49.8644H49.86H49.8557H49.8513H49.8469H49.8426H49.8382H49.8338H49.8295H49.8251H49.8207H49.8163H49.8119H49.8075H49.8032H49.7988H49.7944H49.79H49.7856H49.7812H49.7768H49.7724H49.768H49.7636H49.7591H49.7547H49.7503H49.7459H49.7415H49.7371H49.7326H49.7282H49.7238H49.7193H49.7149H49.7105H49.706H49.7016H49.6972H49.6927H49.6883H49.6838H49.6794H49.6749H49.6705H49.666H49.6616H49.6571H49.6526H49.6482H49.6437H49.6392H49.6348H49.6303H49.6258H49.6213H49.6169H49.6124H49.6079H49.6034H49.5989H49.5944H49.5899H49.5854H49.5809H49.5764H49.5719H49.5674H49.5629H49.5584H49.5539H49.5494H49.5449H49.5404H49.5358H49.5313H49.5268H49.5223H49.5177H49.5132H49.5087H49.5042H49.4996H49.4951H49.4905H49.486H49.4814H49.4769H49.4724H49.4678H49.4632H49.4587H49.4541H49.4496H49.445H49.4404H49.4359H49.4313H49.4267H49.4222H49.4176H49.413H49.4084H49.4038H49.3993H49.3947H49.3901H49.3855H49.3809H49.3763H49.3717H49.3671H49.3625H49.3579H49.3533H49.3487H49.3441H49.3395H49.3349H49.3302H49.3256H49.321H49.3164H49.3118H49.3071H49.3025H49.2979H49.2932H49.2886H49.284H49.2793H49.2747H49.27H49.2654H49.2607H49.2561H49.2514H49.2468H49.2421H49.2375H49.2328C48.5114 84.9163 47.7899 84.8976 47.0685 84.8943C47.1252 84.425 47.153 83.8477 47.1531 83.1648C47.1911 82.3657 47.21 81.4541 47.21 80.43V56.9406C47.21 55.5437 47.2856 54.3992 47.4348 53.5041C47.5806 52.6292 47.9215 52.0195 48.4364 51.6419L48.4365 51.642L48.4431 51.6368C48.9585 51.2244 49.8123 50.9983 51.0471 50.9981C54.663 51.0359 57.6606 51.7327 60.0501 53.0768L60.0512 53.0775C62.4786 54.4219 64.2884 56.3619 65.484 58.9027C66.6816 61.4475 67.285 64.5638 67.285 68.2588C67.285 70.5517 66.9467 72.7104 66.2715 74.7361L66.2705 74.7393C65.6332 76.7637 64.6783 78.5414 63.4067 80.0748ZM95.8765 65.3058L95.8764 65.3058L95.8791 65.3132C96.2675 66.3725 96.4727 67.5713 96.4911 68.9119H83.7908C84.2167 66.476 85.044 64.6845 86.2531 63.511L86.2552 63.5089C87.5028 62.2613 89.0994 61.6338 91.0619 61.6338C92.3143 61.6338 93.3285 61.9645 94.1202 62.6123C94.9205 63.267 95.5074 64.1615 95.8765 65.3058Z" fill="white" stroke="#FEEFDF" strokeWidth="0.4" />
			</svg>

			<p className="text-3xl font-medium pt-32 absolute -top-10 left-1/2 ability ..6x04:text-2xl w-full text-center ">Программа лояльности</p>
			<p className="text-4xl italic mt-2 fort-medium ..7x2:text-2xl ..7x2:pt-36 text-center ..6x5:text-3xl pt-32">ВСТУПАЙ В КЛУБ</p>
			<p className="text-xl text-center mt-4 pb-48 ..7x2:text-base .1x1:pb-42 ..6x04:text-lg">Покупай любимые продукты, зарабатывай DeCoins, оплачивай <br /> ими следующие заказы!
			</p>
			<div className="..6x2:w-full ..6x2:flex ..6x2:justify-center ..7x2:ml-2 absolute left-1/2 ability z-10 bottom-20">
				<button className="mr-4 border-2 py-3 px-6 text-white bg-primary border-primary transition-all hover:bg-white hover:text-primary ..7x2:text-10px">Вступить в клуб</button>
				<button className="mr-4 border-2 py-3 px-6 text-primary bg-white border-primary transition-all hover:bg-primary hover:text-white ..7x2:text-10px">Подробнее</button>
			</div>
		</section>
	)
}
export default Clubs