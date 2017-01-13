"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var HomeComponent = (function () {
    /**
     *
     */
    function HomeComponent(router) {
        this.router = router;
        this.counter = 16;
    }
    HomeComponent.prototype.onTap = function () {
        console.log('player one: ' + this.playerOne);
        this.router.navigate(["/scoreboard"]);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscUJBQTBCLGVBQWUsQ0FBQyxDQUFBO0FBQzFDLHVCQUF1QixpQkFBaUIsQ0FBQyxDQUFBO0FBT3pDO0lBVUk7O09BRUc7SUFDSCx1QkFBb0IsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFaM0IsWUFBTyxHQUFXLEVBQUUsQ0FBQztJQVlnQixDQUFDO0lBRXRDLDZCQUFLLEdBQVo7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUF2Qkw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU07WUFDaEIsV0FBVyxFQUFFLHdCQUF3QjtTQUN4QyxDQUFDOztxQkFBQTtJQXFCRixvQkFBQztBQUFELENBQUMsQUFuQkQsSUFtQkM7QUFuQlkscUJBQWEsZ0JBbUJ6QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiaG9tZVwiLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vdmlld3MvaG9tZS9ob21lLmh0bWxcIixcbn0pXG4gICAgXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCB7XG4gICAgcHVibGljIGNvdW50ZXI6IG51bWJlciA9IDE2O1xuICAgIHB1YmxpYyBwbGF5ZXJPbmU6IHN0cmluZztcbiAgICBwdWJsaWMgcGxheWVyVHdvOiBzdHJpbmc7XG4gICAgcHVibGljIHBsYXllclRocmVlOiBzdHJpbmc7XG4gICAgcHVibGljIHBsYXllckZvdXI6IHN0cmluZztcbiAgICBwdWJsaWMgcGxheWVyRml2ZTogc3RyaW5nO1xuICAgIHB1YmxpYyBtZXNzYWdlOiBzdHJpbmc7XG5cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikgeyAgICAgICB9XG4gICAgXG4gICAgcHVibGljIG9uVGFwKCkge1xuICAgICAgICBjb25zb2xlLmxvZygncGxheWVyIG9uZTogJyArIHRoaXMucGxheWVyT25lKTtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3Njb3JlYm9hcmRcIl0pO1xuICAgIH1cbn1cbiJdfQ==