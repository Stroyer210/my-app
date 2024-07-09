import "./../App.css";
// import imageHero from "./hero.avif"
import Navbar from './Navbar';
import friedShrimp from "./fried-shrimp.jpg";
import tots from "./tots.jpg";
import crab from "./crab.jpg";
import chicken from "./chicken.jpg";
import salmon from "./salmon.jpg";
import Footer from './Footer';
import drunkenDuck from "./../images/drunkenDuck.jpg";
import hangoverDuck from "./../images/hangoverDuck.jpg";
import classicDuck from "./../images/classicDuck.jpg";
import buffalo from "./../images/buffalo.jpg";
import giddyUp from "./../images/giddyUp.jpg";

const Food = () => {
    return (
        <div className="overflow-y-auto h-screen">
            <div>
                <Navbar />
            </div>
            <div className="backdrop-filter-nav 2xl:mx-96 mt-10 pb-10">
                <h1 className="text-center text-4xl text-white my-10 font-extrabold text-shadow">FOOD MENU</h1>
                <hr className="mx-10" />
                <div>
                    <div className="grid grid-cols-3 gap-2">
                        <a href="#sides"><button className="mx-14 text-2xl text-white my-5 font-extrabold text-shadow border rounded-xl p-2 backdrop-filter">Signature Appetizers</button></a>
                        <a href="#sides"><button className="mx-14 text-2xl text-white my-5 font-extrabold text-shadow border rounded-xl p-2 backdrop-filter">Appetizers</button></a>
                        <a href="#sides"><button className="mx-14 text-2xl text-white my-5 font-extrabold text-shadow border rounded-xl p-2 backdrop-filter">Signature Salads</button></a>
                        <a href="#sides"><button className="mx-14 text-2xl text-white my-5 font-extrabold text-shadow border rounded-xl p-2 backdrop-filter">Salads</button></a>
                        <a href="#sides"><button className="mx-14 text-2xl text-white my-5 font-extrabold text-shadow border rounded-xl p-2 backdrop-filter">Sandwich Favorites</button></a>
                        <a href="#sides"><button className="mx-14 text-2xl text-white my-5 font-extrabold text-shadow border rounded-xl p-2 backdrop-filter">Burgers</button></a>
                        <a href="#sides"><button className="mx-14 text-2xl text-white my-5 font-extrabold text-shadow border rounded-xl p-2 backdrop-filter">Side Choices</button></a>
                    </div>
                    <hr className="mx-10" />
                    <h2 className="text-center text-3xl text-white mt-10 mb-5 font-extrabold text-shadow">Signature Appetizers</h2>
                    <p className="text-center text-xl text-white mb-2 font-extrabold text-shadow">Bada Bing Shrimp</p>
                    <p className="text-center text-base text-gray-300 mb-5 font-extrabold">½ lb hand breaded, deep-fried shrimp served with signature sauce.</p>
                    <img src={friedShrimp} alt="fried-shrimp" className="w-64 rounded-3xl m-auto" />
                    <p className="text-center text-xl text-white mt-10 mb-2 font-extrabold text-shadow">Loaded Tater Tots</p>
                    <p className="text-center text-base text-gray-300 mb-5 font-extrabold">¾ lb golden-brown tater tots topped with our signature queso sauce, bacon, scallions & drizzled with sour cream.</p>
                    <img src={tots} alt="tots" className="w-64 rounded-3xl m-auto" />
                    <p className="text-center text-xl text-white mt-10 mb-2 font-extrabold text-shadow">Crab Cakes</p>
                    <p className="text-center text-base text-gray-300 mb-5 font-extrabold">Hand pattied and grilled golden brown served with homemade remoulade sauce.</p>
                    <img src={crab} alt="crab" className="w-64 rounded-3xl m-auto" />
                    <hr className="mx-60 mt-5" />
                    <h2 className="text-center text-3xl text-white mt-5 mb-5 font-extrabold text-shadow">Appetizers</h2>
                    <p className="text-center text-xl text-white mt-5 mb-2 font-extrabold text-shadow">Cheese Curds</p>
                    <p className="text-center text-xl text-white mt-5 mb-2 font-extrabold text-shadow">Onion Rings</p>
                    <p className="text-center text-xl text-white mt-5 mb-2 font-extrabold text-shadow">Chicken Strips</p>
                    <p className="text-center text-xl text-white mt-5 mb-2 font-extrabold text-shadow">Bavarian Pretzel</p>
                    <hr className="mx-10 mt-10" />
                    <h2 className="text-center text-3xl text-white mt-10 mb-5 font-extrabold text-shadow">Signature Salads</h2>
                    <p className="text-center text-xl text-white mb-2 font-extrabold text-shadow">Chicken Cranberry Salad</p>
                    <p className="text-center text-base text-gray-300 mb-5 font-extrabold">Grilled Chicken on a bed of mixed greens, with dried cranberries, scallions, Parmesan cheese, candied almonds & Balsamic vinaigrette.</p>
                    <img src={chicken} alt="chicken" className="w-64 rounded-3xl m-auto" />
                    <p className="text-center text-xl text-white mt-10 mb-2 font-extrabold text-shadow">Blackened Salmon Salad</p>
                    <p className="text-center text-base text-gray-300 mb-5 font-extrabold">Mixed greens topped with blackened salmon*, red onions, tomatoes, cucumbers, fresh mushrooms & croutons.</p>
                    <img src={salmon} alt="salmon" className="w-64 rounded-3xl m-auto" />
                    <hr className="mx-60 mt-5" />
                    <h2 className="text-center text-3xl text-white mt-5 mb-5 font-extrabold text-shadow">Salads</h2>
                    <p className="text-center text-xl text-white mt-5 mb-2 font-extrabold text-shadow">Chicken Ceasar Salad</p>
                    <p className="text-center text-base text-gray-300 mb-5 font-extrabold">Grilled chicken, romaine lettuce tossed with parmesan cheese, ceasar dressing & croutons.</p>
                    <p className="text-center text-xl text-white mt-5 mb-2 font-extrabold text-shadow">Cobb Salad</p>
                    <p className="text-center text-base text-gray-300 mb-5 font-extrabold">Iceberg lettuce topped with rows of grilled chicken, bacon, crumbled bleu cheese, red onions, cheddar, tomatoes & hard boiled eggs.</p>
                    <p className="text-center text-xl text-white mt-5 mb-2 font-extrabold text-shadow">Chef Salad</p>
                    <p className="text-center text-base text-gray-300 mb-5 font-extrabold">Iceberg lettuce, topped with deli ham, turkey, red onions, tomato, green peppers, cheese & egg.</p>
                    <hr className="mx-10 mt-10" />
                    <h2 className="text-center text-3xl text-white mt-5 mb-2 font-extrabold text-shadow">Sandwich Favorites</h2>
                    <p className="text-center text-base text-gray-200 mb-6 font-extrabold">Served with Fries – Sub Cheese Curds or Waffle Fries for $2.50</p>
                    <p className="text-center text-xl text-white mt-5 mb-2 font-extrabold text-shadow">Clubhouse Sandwich</p>
                    <p className="text-center text-xl text-white mt-5 mb-2 font-extrabold text-shadow">Bacon, Lettuce & Tomato</p>
                    <p className="text-center text-xl text-white mt-5 mb-2 font-extrabold text-shadow">Grilled Chicken Sandwich</p>
                    <p className="text-center text-xl text-white mt-5 mb-2 font-extrabold text-shadow">Hand Breaded Walleye</p>
                    <p className="text-center text-xl text-white mt-5 mb-2 font-extrabold text-shadow">Irish Ruben</p>
                    <p className="text-center text-xl text-white mt-5 mb-2 font-extrabold text-shadow">Grilled Salmon Sandwich</p>
                    <hr className="mx-10 mt-10" />
                    <h2 className="text-center text-3xl text-white mt-5 mb-2 font-extrabold text-shadow">100% Certified Angus Beef Burgers</h2>
                    <p className="text-center text-base text-gray-200 mb-6 font-extrabold">Served with Fries – Sub Cheese Curds or Waffle Fries for $2.50</p>
                    <p className="text-center text-xl text-white mt-5 mb-2 font-extrabold text-shadow">Drunken Duck Burger*</p>
                    <p className="text-center text-base text-gray-300 mb-5 font-extrabold">2 patties topped with bacon, ham, shredded chicken, swiss & cheddar cheese.</p>
                    <img src={drunkenDuck} alt="drunkenDuck burger" className="w-64 rounded-3xl m-auto" />
                    <p className="text-center text-xl text-white mt-5 mb-2 font-extrabold text-shadow">Hangover Duck Burger*</p>
                    <p className="text-center text-base text-gray-300 mb-5 font-extrabold">Fried egg, hash browns, bacon & cheddar cheese.</p>
                    <img src={hangoverDuck} alt="hangoverDuck burger" className="w-64 rounded-3xl m-auto" />
                    <p className="text-center text-xl text-white mt-5 mb-2 font-extrabold text-shadow">The Classic Duck Burger*</p>
                    <p className="text-center text-base text-gray-300 mb-5 font-extrabold">Choice of cheese, topped with lettuce, tomato, onions & pickles.</p>
                    <img src={classicDuck} alt="classicDuck burger" className="w-64 rounded-3xl m-auto" />
                    <p className="text-center text-xl text-white mt-5 mb-2 font-extrabold text-shadow">Buffalo Burger*</p>
                    <p className="text-center text-base text-gray-300 mb-5 font-extrabold">Pepper jack cheese, buffalo sauce, chipotle mayo, jalapenos & topped with crispy onions.</p>
                    <img src={buffalo} alt="buffalo burger" className="w-64 rounded-3xl m-auto" />
                    <p className="text-center text-xl text-white mt-5 mb-2 font-extrabold text-shadow">Giddy Up Burger*</p>
                    <p className="text-center text-base text-gray-300 mb-5 font-extrabold">Topped with BBQ sauce, cheddar cheese, strips of bacon & a golden brown onion ring.</p>
                    <img src={giddyUp} alt="giddyUp burger" className="w-64 rounded-3xl m-auto" />
                    <hr className="mx-10 mt-10" />
                    <div id="sides">
                        <h2 className="text-center text-3xl text-white mt-5 mb-2 font-extrabold text-shadow">Side Choices</h2>
                        <p className="text-center text-xl text-white mt-5 mb-2 font-extrabold text-shadow">Fries</p>
                        <p className="text-center text-xl text-white mt-5 mb-2 font-extrabold text-shadow">Tater Tots</p>
                        <p className="text-center text-xl text-white mt-5 mb-2 font-extrabold text-shadow">Applesauce</p>
                        <p className="text-center text-xl text-white mt-5 mb-2 font-extrabold text-shadow">Coleslaw</p>
                        <p className="text-center text-xl text-white mt-5 mb-2 font-extrabold text-shadow">Mashed potatoes</p>
                        <p className="text-center text-xl text-white mt-5 mb-2 font-extrabold text-shadow">Kettle Chips</p>
                        <p className="text-center text-xl text-white mt-5 mb-2 font-extrabold text-shadow">Baked Potato <span className="text-sm">($2.50 extra)</span></p>
                        <p className="text-center text-xl text-white mt-5 mb-2 font-extrabold text-shadow">Cheese Curds <span className="text-sm">($2.50 extra)</span></p>
                        <p className="text-center text-xl text-white mt-5 mb-2 font-extrabold text-shadow">Mac And Cheese <span className="text-sm">($2.50 extra)</span></p>
                    </div>
                    <hr className="mx-10 mt-10" />
                    <p className="text-center text-sm text-gray-200 my-6 font-extrabold">*Whether dining out or preparing food at home, consuming raw or undercooked meats, poultry, seafood, shellfish or eggs may increase your risk of food borne illness.</p>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default Food;