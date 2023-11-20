import { rectangle, circle, triangle, circlesvg, rectanglesvg, trianglesvg } from "./figures.js";


function canvaslise() {
	circle("black", 80, 80, 61);
	circle("pink", 80, 80, 60);
	circle("white", 30, 34, 10);
	circle("white", 70, 34, 10);
	rectangle("black", 53, 46, 14, 4);
	circle("black", 33, 37, 7);
	circle("black", 73, 37, 7);
}

canvaslise();


function svglise() {
	circlesvg("black", "100", "100", "61");
	circlesvg("pink", "100", "100", "60");
	circlesvg("white", "30", "34", "10");
	circlesvg("white", "70", "34", "10");
	rectanglesvg("black", "53", "46", "14", "4");
	circlesvg("black", "33", "37", "7");
	circlesvg("black", "73", "37", "7");
}

svglise();

