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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscUJBQTBCLGVBQWUsQ0FBQyxDQUFBO0FBQzFDLHVCQUF1QixpQkFBaUIsQ0FBQyxDQUFBO0FBT3pDO0lBUUksdUJBQTJCLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBRXpDLENBQUM7SUFFTSw2QkFBSyxHQUFaO1FBQ0ksSUFBSSxPQUFPLEdBQWEsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM3RyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBcEJMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFdBQVcsRUFBRSx3QkFBd0I7U0FDeEMsQ0FBQzs7cUJBQUE7SUFrQkYsb0JBQUM7QUFBRCxDQUFDLEFBaEJELElBZ0JDO0FBaEJZLHFCQUFhLGdCQWdCekIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiaG9tZVwiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi92aWV3cy9ob21lL2hvbWUuaHRtbFwiLFxyXG59KVxyXG4gICAgXHJcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IHtcclxuICAgIHB1YmxpYyBwbGF5ZXJPbmU6IHN0cmluZztcclxuICAgIHB1YmxpYyBwbGF5ZXJUd286IHN0cmluZztcclxuICAgIHB1YmxpYyBwbGF5ZXJUaHJlZTogc3RyaW5nO1xyXG4gICAgcHVibGljIHBsYXllckZvdXI6IHN0cmluZztcclxuICAgIHB1YmxpYyBwbGF5ZXJGaXZlOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgcGxheWVyczogc3RyaW5nW107XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcclxuICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgb25UYXAoKSB7XHJcbiAgICAgICAgbGV0IHBsYXllcnM6IHN0cmluZ1tdID0gW3RoaXMucGxheWVyT25lLCB0aGlzLnBsYXllclR3bywgdGhpcy5wbGF5ZXJUaHJlZSwgdGhpcy5wbGF5ZXJGb3VyLCB0aGlzLnBsYXllckZpdmVdO1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcInNjb3JlYm9hcmRcIiwgdGhpcy5wbGF5ZXJzXSk7XHJcbiAgICB9XHJcbn1cclxuIl19