'use strict';

/**
 * @ngdoc function
 * @name angularTruffleMetaCoin.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularTruffleMetaCoin
 */
angular.module('angularTruffleMetaCoin')
    .controller('MainCtrl', function ($scope,$timeout) {
        $scope.accounts = [];
        $scope.balance="0";
        $scope.account = "0xda80306d17620032f5b690c81b47db4737c6faca";
        $timeout(function(){
            $scope.refreshBalance();
        },1000)
        $scope.refreshBalance = function () {

            var meta = MetaCoin.deployed();
            meta.getBalance.call($scope.account, {from: $scope.account}).then(
                function (value) {
                    console.log('got balance %o',value.toNumber())
                    $scope.balance = value.toNumber();

                }).catch(function (e) {
                    console.log(e);
                $scope.setStatus("Error getting balance; see log.");
                 });
        };
        web3.eth.getAccounts(function (err, accs) {
            if (err != null) {
                alert("There was an error fetching your accounts.");
                return;
            }

            if (accs.length == 0) {
                alert("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.");
                return;
            }
            console.log('got accounts %o',accs);

            $scope.accounts = accs;
            $scope.account = $scope.accounts[0];
            $scope.refreshBalance();
        })
        $scope.setStatus = function (message) {
            $scope.status = message;
        }

        $scope.sendCoin = function() {
            var meta = MetaCoin.deployed();
            $scope.setStatus("Initiating transaction... (please wait)");
            meta.sendCoin($scope.receiver, $scope.amount, {
                from: $scope.account
            }).then(function() {
                $scope.setStatus("Transaction complete!");
                $scope.refreshBalance();
            }).catch(function(e) {
                console.log(e);
                $scope.setStatus("Error sending coin; see log.");
            });
        };
    });
