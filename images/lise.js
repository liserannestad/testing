import { rectangle, circle, triangle, circlesvg, rectanglesvg, trianglesvg } from "./figures.js";


function canvaslise() {
	circle("black", 75, 75, 61);
	circle("pink", 75, 75, 60);
	circle("white", 60, 50, 10);
	circle("white", 90, 50, 10);
	rectangle("black", 71, 60, 14, 4);
	circle("black", 60, 50, 7);
	circle("black", 90, 50, 7);
}

canvaslise();


function svglise() {
	circlesvg("black", "75", "75", "61");
	circlesvg("pink", "75", "75", "60");
	circlesvg("white", "60", "50", "10");
	circlesvg("white", "90", "50", "10");
	rectanglesvg("black", "71", "60", "14", "4");
	circlesvg("black", "60", "50", "7");
	circlesvg("black", "90", "50", "7");
}

svglise();

