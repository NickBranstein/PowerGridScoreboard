"use strict";
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.counter = 16;
    }
    Object.defineProperty(AppComponent.prototype, "message", {
        get: function () {
            if (this.counter > 0) {
                return this.counter + " taps left";
            }
            else {
                return "Jason was here! \nYou are ready to start building!";
            }
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.onTap = function () {
        this.counter--;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            templateUrl: "app.component.html",
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQU0xQztJQUFBO1FBQ1csWUFBTyxHQUFXLEVBQUUsQ0FBQztJQWFoQyxDQUFDO0lBWEcsc0JBQVcsaUNBQU87YUFBbEI7WUFDSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ25CLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLFlBQVksQ0FBQztZQUN2QyxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ0osTUFBTSxDQUFDLG9EQUFvRCxDQUFDO1lBQ2hFLENBQUM7UUFDTCxDQUFDOzs7T0FBQTtJQUVNLDRCQUFLLEdBQVo7UUFDSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQWpCTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsUUFBUTtZQUNsQixXQUFXLEVBQUUsb0JBQW9CO1NBQ3BDLENBQUM7O29CQUFBO0lBZUYsbUJBQUM7QUFBRCxDQUFDLEFBZEQsSUFjQztBQWRZLG9CQUFZLGVBY3hCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJteS1hcHBcIixcbiAgICB0ZW1wbGF0ZVVybDogXCJhcHAuY29tcG9uZW50Lmh0bWxcIixcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgICBwdWJsaWMgY291bnRlcjogbnVtYmVyID0gMTY7XG5cbiAgICBwdWJsaWMgZ2V0IG1lc3NhZ2UoKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKHRoaXMuY291bnRlciA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvdW50ZXIgKyBcIiB0YXBzIGxlZnRcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBcIkphc29uIHdhcyBoZXJlISBcXG5Zb3UgYXJlIHJlYWR5IHRvIHN0YXJ0IGJ1aWxkaW5nIVwiO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyBvblRhcCgpIHtcbiAgICAgICAgdGhpcy5jb3VudGVyLS07XG4gICAgfVxufVxuIl19