export default class subjectsController {

	constructor($scope, adminModuleServices,$state) {
		var vm = this;
		this.adminModuleServices = adminModuleServices;
		$scope.demoVariable = 'Subjects Page';
		
		this.$state = $state;
		this.$scope = $scope;
		this.$scope.data = [];
		this.$scope.data1 = [];
		//this.getSubList();

	}

	addsub(arg) {
		let param = {};
		param.sname = arg.subName;

		this.adminModuleServices.subjects(param).then((response) => {
			 if(response.status==true){
				this.$state.go('subjects');
			 }
			 
		});
	}

	getSubList() {
		
		let bm = this;
		let data = [];

		//let value = "";
		this.adminModuleServices.getsubjects().then((response) => {
			 if(response.status==true){
				bm.$scope.data = angular.copy(response.data);
				bm.$scope.data1 = angular.copy(response.data);
				data = angular.copy(response.data);
				
			}
			console.log(data);
			 
		});
	}




}

subjectsController.$inject = ['$scope', 'adminModuleServices','$state'];
