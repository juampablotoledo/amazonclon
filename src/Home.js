import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
	return (
		<div className="home">
			<div className="home__container">
				<img
					src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2020/TV/BRND/BRND_MTH20_00000_GWBleedingHero_1500x600_Final_en-US_PVD5529_B._CB406173267_.jpg"
					className="home__image"
					alt=""
				/>
				<div className="home__row">
					<Product
						id="1234222123"
						title="Graded Chinese Reader 500 Words: Selected Abridged Chinese Contemporary Mini-stories (W/MP3) (English and Chinese Edition)"
						price={29.99}
						image="https://images-na.ssl-images-amazon.com/images/I/51iLIysYczL._SX335_BO1,204,203,200_.jpg"
						rating={5}
					/>
					<Product
						id="1234123"
						title="Champion Power Equipment 100165 9375/7500-Watt Dual Fuel Portable Generator with Electric Start"
						price={1100.55}
						rating={4}
						image="https://m.media-amazon.com/images/I/81qI-SpymOL._AC_UY218_.jpg"
					/>
				</div>
				<div className="home__row">
					<Product
						id="123419923"
						title="Coleman Portable Butane Stove with Carrying Case"
						price={33.79}
						rating={3}
						image="https://images-na.ssl-images-amazon.com/images/I/719FE6i0X9L._AC_SL1500_.jpg"
					/>
					<Product
						id="1231253"
						title="WARN 85330 1500AC 120V Electric Utility Winch - 1,500 lbs. Capacity"
						price={820.57}
						rating={4}
						image="https://m.media-amazon.com/images/I/61vFtlje05L._AC_UY218_.jpg"
					/>
					<Product
						id="12312356"
						title="NIMTEK New Carburetor Carb for Champion Power Equipment 3500 4000 Watts Gas Generator"
						price={15.99}
						rating={5}
						image="https://m.media-amazon.com/images/I/617BtbaxLDL._AC_UY218_.jpg"
					/>
				</div>
				<div className="home__row">
					<Product
						id="1231253653"
						title="NorthStar Horizontal/Vertical Log Wood Splitter - 37-Ton, 270cc Honda GX270 Engine"
						price={1899.99}
						rating={4}
						image="https://m.media-amazon.com/images/I/81J-XF0bQ2L._AC_UY218_.jpg"
					/>
				</div>
			</div>
		</div>
	);
}
export default Home;
