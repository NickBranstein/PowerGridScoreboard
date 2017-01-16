"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var HomeComponent = (function () {
    function HomeComponent(router) {
        this.router = router;
    }
    HomeComponent.prototype.onTap = function () {
        var players = [this.playerOne, this.playerTwo, this.playerThree, this.playerFour, this.playerFive];
        this.router.navigate(["scoreboard", this.players]);
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "home",
            templateUrl: "./views/home/home.html",
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscUJBQTBCLGVBQWUsQ0FBQyxDQUFBO0FBQzFDLHVCQUF1QixpQkFBaUIsQ0FBQyxDQUFBO0FBT3pDO0lBUUksdUJBQTJCLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBRXpDLENBQUM7SUFFTSw2QkFBSyxHQUFaO1FBQ0ksSUFBSSxPQUFPLEdBQWEsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM3RyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBcEJMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFdBQVcsRUFBRSx3QkFBd0I7U0FDeEMsQ0FBQzs7cUJBQUE7SUFrQkYsb0JBQUM7QUFBRCxDQUFDLEFBaEJELElBZ0JDO0FBaEJZLHFCQUFhLGdCQWdCekIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcImhvbWVcIixcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3ZpZXdzL2hvbWUvaG9tZS5odG1sXCIsXG59KVxuICAgIFxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQge1xuICAgIHB1YmxpYyBwbGF5ZXJPbmU6IHN0cmluZztcbiAgICBwdWJsaWMgcGxheWVyVHdvOiBzdHJpbmc7XG4gICAgcHVibGljIHBsYXllclRocmVlOiBzdHJpbmc7XG4gICAgcHVibGljIHBsYXllckZvdXI6IHN0cmluZztcbiAgICBwdWJsaWMgcGxheWVyRml2ZTogc3RyaW5nO1xuICAgIHB1YmxpYyBwbGF5ZXJzOiBzdHJpbmdbXTtcblxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XG4gICAgXG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyBvblRhcCgpIHtcbiAgICAgICAgbGV0IHBsYXllcnM6IHN0cmluZ1tdID0gW3RoaXMucGxheWVyT25lLCB0aGlzLnBsYXllclR3bywgdGhpcy5wbGF5ZXJUaHJlZSwgdGhpcy5wbGF5ZXJGb3VyLCB0aGlzLnBsYXllckZpdmVdO1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJzY29yZWJvYXJkXCIsIHRoaXMucGxheWVyc10pO1xuICAgIH1cbn1cbiJdfQ==