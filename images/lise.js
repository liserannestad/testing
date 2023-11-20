import { rectangle, circle, triangle, circlesvg, rectanglesvg, trianglesvg } from "./figures.js";


function canvaslise() {
	circle("black", 50, 50, 61);
	circle("pink", 50, 50, 60);
	circle("white", 30, 34, 10);
	circle("white", 70, 34, 10);
	rectangle("black", 53, 46, 14, 4);
	circle("black", 33, 37, 7);
	circle("black", 73, 37, 7);
}

canvaslise();


function svglise() {
	circlesvg("black", "50", "50", "61");
	circlesvg("pink", "50", "50", "60");
	circlesvg("white", "30", "34", "10");
	circlesvg("white", "70", "34", "10");
	rectanglesvg("black", "53", "46", "14", "4");
	circlesvg("black", "33", "37", "7");
	circlesvg("black", "73", "37", "7");
}

svglise();

overlay-xy(circle(7, "solid", "black"), -73, -37, 
  overlay-xy(circle(7, "solid", "black"), -33, -37, 
    overlay-xy(rectangle(14, 4, "solid", "black"), -53, -46, 
      overlay-xy(circle(10, "solid", "white"), -70, -34, 
        overlay-xy(circle(10, "solid", "white"), -30, -34, 
          overlay(circle(60, "solid", "pink"),
            circle(61, "solid", "black")))))))
