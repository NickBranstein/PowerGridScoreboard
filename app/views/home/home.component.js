"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var HomeComponent = (function () {
    function HomeComponent(router) {
        this.router = router;
        this.counter = 16;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscUJBQTBCLGVBQWUsQ0FBQyxDQUFBO0FBQzFDLHVCQUF1QixpQkFBaUIsQ0FBQyxDQUFBO0FBT3pDO0lBVUksdUJBQTJCLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBVGxDLFlBQU8sR0FBVyxFQUFFLENBQUM7SUFXNUIsQ0FBQztJQUVNLDZCQUFLLEdBQVo7UUFDSSxJQUFJLE9BQU8sR0FBYSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzdHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUF0Qkw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU07WUFDaEIsV0FBVyxFQUFFLHdCQUF3QjtTQUN4QyxDQUFDOztxQkFBQTtJQW9CRixvQkFBQztBQUFELENBQUMsQUFsQkQsSUFrQkM7QUFsQlkscUJBQWEsZ0JBa0J6QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJob21lXCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3ZpZXdzL2hvbWUvaG9tZS5odG1sXCIsXHJcbn0pXHJcbiAgICBcclxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQge1xyXG4gICAgcHVibGljIGNvdW50ZXI6IG51bWJlciA9IDE2O1xyXG4gICAgcHVibGljIHBsYXllck9uZTogc3RyaW5nO1xyXG4gICAgcHVibGljIHBsYXllclR3bzogc3RyaW5nO1xyXG4gICAgcHVibGljIHBsYXllclRocmVlOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgcGxheWVyRm91cjogc3RyaW5nO1xyXG4gICAgcHVibGljIHBsYXllckZpdmU6IHN0cmluZztcclxuICAgIHB1YmxpYyBtZXNzYWdlOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgcGxheWVyczogc3RyaW5nW107XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcclxuICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgb25UYXAoKSB7XHJcbiAgICAgICAgbGV0IHBsYXllcnM6IHN0cmluZ1tdID0gW3RoaXMucGxheWVyT25lLCB0aGlzLnBsYXllclR3bywgdGhpcy5wbGF5ZXJUaHJlZSwgdGhpcy5wbGF5ZXJGb3VyLCB0aGlzLnBsYXllckZpdmVdO1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcInNjb3JlYm9hcmRcIiwgdGhpcy5wbGF5ZXJzXSk7XHJcbiAgICB9XHJcbn1cclxuIl19