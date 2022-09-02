import SideMenuLink from "./SideMenuLink";
import styled from "styled-components";



function SideMenuGroup({icon, groupName, groupId, tabs, active}) {
    return (
        <div>
            {/* Первая кнопка меню группы */}
            <SideMenuLink name={groupName} isActive={groupId == active} icon={icon}/>
            
            {/* Остальные кнопки меню группы с одной и той же иконкой стрелки */}
            {tabs.map(tab => {
                return (
                    <div key={tab[1]}>
                        <SideMenuLink name={tab[0]} isActive={tab[1] == active}/>
                    </div>
                );
            })}
        </div>
    );
}
  
export default SideMenuGroup;