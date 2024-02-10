const listContainer = document.getElementById('list'); // ul tag
const  completedTaskContainer = document.getElementById('complete');
const newItem = document.getElementById('newItem'); // input Tag
const todoList = ["Development", "Study"]

let itemStyle = "text-xl px-3 py-2 my-2 border-b hover:border border-green-400 rounded-lg";
let item='';


init();


