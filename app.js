const fetchData = async () => {
    const response = await axios.get('https://valorant-api.com/v1/agents');

    return response.data
};

const controllers = [ "Astra" , "Brimstone" , "Harbor" , "Omen" , "Viper"];
const duelists = [ "Jett" , "Neon" , "Phoenix" , "Raze" , "Reyna" , "Yoru" ];
const initiators = [ "Breach" , "Fade" , "Kay/O" , "Skye" , "Sova" ];
const sentinels = [ "Chamber" , "Cypher" , "Killjoy" , "Sage" ];

createDropdown(firstSelect, controllers.length);
createDropdown(secondSelect, duelists.length);
createDropdown(thirdSelect, initiators.length);
createDropdown(fourthSelect, sentinels.length);

document.querySelector('.btn').addEventListener('click', event => {
    event.preventDefault();
    
    const selectionsStr = [
        {
        class: "Controller",
        userSelect: firstSelect.value,
        agents: controllers
        },
        {
        class: "Duelist",
        userSelect: secondSelect.value,
        agents: duelists
        },
        {
        class: "Initiator",
        userSelect: thirdSelect.value,
        agents: initiators
        },
        {
        class: "Sentinel",
        userSelect: fourthSelect.value,
        agents: sentinels
        }
    ];

    for ( selection of selectionsStr ) {
        selection.userSelect === 'select' ? selection.userSelect = 0 : null
    };

    const selectionsNum = selectionsStr.map((selection) => {
        return parseInt(selection.userSelect, 10)
    });

    const initialValue = 0;
    const totalSelections = selectionsNum.reduce((total, currVal) => total + currVal, initialValue);

    if ( totalSelections !== 5 ) {
            btn.innerText = "Please select exactly 5 agents"
        } else {
            selectionsStr.forEach((element) => {
                return random(element.agents, parseInt(element.userSelect,10))
            })
        }

    setTimeout(function() {
        btn.innerText = 'BUILD TEAM';
    }, 2000);

});

// next steps: 
// loop through userSelects and use DOM manipulation to show selected agent pictures in a list (note: might need to remove the else in line 56)



