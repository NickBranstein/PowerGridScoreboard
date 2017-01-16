"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var ScoreboardComponent = (function () {
    function ScoreboardComponent(route) {
        var _this = this;
        this.route = route;
        this.route.params.subscribe(function (params) {
            _this.players = params["players"];
        });
    }
    ScoreboardComponent = __decorate([
        core_1.Component({
            selector: "scoreboard",
            templateUrl: "./views/scoreboard/scoreboard.html",
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute])
    ], ScoreboardComponent);
    return ScoreboardComponent;
}());
exports.ScoreboardComponent = ScoreboardComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NvcmVib2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzY29yZWJvYXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscUJBQTBCLGVBQWUsQ0FBQyxDQUFBO0FBQzFDLHVCQUErQixpQkFBaUIsQ0FBQyxDQUFBO0FBT2pEO0lBR0ksNkJBQTJCLEtBQXFCO1FBSHBELGlCQVNDO1FBTjhCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQzVDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFDLE1BQU07WUFDL0IsS0FBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDckMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBWkw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFlBQVk7WUFDdEIsV0FBVyxFQUFFLG9DQUFvQztTQUNwRCxDQUFDOzsyQkFBQTtJQVdGLDBCQUFDO0FBQUQsQ0FBQyxBQVRELElBU0M7QUFUWSwyQkFBbUIsc0JBUy9CLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInNjb3JlYm9hcmRcIixcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3ZpZXdzL3Njb3JlYm9hcmQvc2NvcmVib2FyZC5odG1sXCIsXG59KVxuICAgIFxuZXhwb3J0IGNsYXNzIFNjb3JlYm9hcmRDb21wb25lbnQge1xuICAgIHB1YmxpYyBwbGF5ZXJzOiBzdHJpbmdbXTtcblxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkge1xuICAgICAgICB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUoKHBhcmFtcykgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXJzID0gcGFyYW1zW1wicGxheWVyc1wiXTtcbiAgICAgICAgfSk7ICAgICAgXG4gICAgfVxuICAgIFxufVxuIl19