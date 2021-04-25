# CWO Tools
This is intended as a small selection of tools for use for sailing instructors teaching according to the [CWO](https://www.cwo.nl) system.

# Building instructions
In order to build the project run the following commands:
```
npm install
npm run production
```
This will create a production ready environment in `./dist`.

# Future Ideas
Some ideas I would like to look at in the future, kind of split based on what kind of work it is, but in no particular order.
I realise that most of this is extreme overkill for this project, but it also functions as a testing ground / learning experience.

## Major developments
* Update/Extend requirement lists
* Further incorporate Tailwind
	* Extract more common styles by means of `@apply`
	* Work on light-mode theme
	* Build proper responsive design
* More robust storage method
* Lesson planner
	* Move options to a menu
	* Extract requirements app into separate component and create template
	* Set up router
	* Make PoC
* Accomodation Planner?
* Automatic testing
	* Maybe integrate with GitHub Actions

## Minor developments
* Create endpoint for Requirements files, allowing for versioning using Mix
* Set up linting / style enforcement
* Replace text icons with proper icons
* Look into JS size when compiled for production
* Expand Readme
	* Add Requirements
	* Add Development instructions
