pragma solidity ^0.4.17;
// linter warnings (red underline) about pragma version can ignored!

// contract code will go here
// SPDX-License-Identifier: GPL-3.0
contract Inbox {

    string public message;

    function Inbox(string memory initialMessage) {
        message = initialMessage;
    }

    function setMessage(string memory newMessage) public {
        message = newMessage;
    }
}