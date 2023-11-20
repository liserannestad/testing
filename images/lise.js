import { rectangle, circle, triangle, circlesvg, rectanglesvg, trianglesvg } from "./figures.js";


function canvaslise() {
	circle("black", 75, 75, 61);
	circle("pink", 75, 75, 60);
	circle("white", 30, 34, 10);
	circle("white", 70, 34, 10);
	rectangle("black", 71,5, 60, 14, 4);
	circle("black", 33, 37, 7);
	circle("black", 73, 37, 7);
}

canvaslise();


function svglise() {
	circlesvg("black", "75", "75", "61");
	circlesvg("pink", "75", "75", "60");
	circlesvg("white", "60", "50", "10");
	circlesvg("white", "90", "50", "10");
	rectanglesvg("black", "71,5", "60", "14", "4");
	circlesvg("black", "65", "45", "7");
	circlesvg("black", "85", "45", "7");
}

svglise();

