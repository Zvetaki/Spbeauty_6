import ProfileIcon from '../../../Icons/ProfileIcon';
import GridIcon from '../../../Icons/GridIcon';
import SettingsIcon from '../../../Icons/SettingsIcon';
import SideMenuGroup from './SideMenuGroup';
import styled from 'styled-components';

const ButtonContainer = styled.div`
    &:hover {
        opacity: 0.7;
    }
`;
const activeTab = 'about-company';

function SideMenuContents() {
    return (
        <div className='d-flex flex-column gap-2'>
            <SideMenuGroup 
                icon={<ProfileIcon/>} 
                groupName='Личный профиль'
                groupId='profile' 
                tabs={[
                    ['Данные профиля', 'profile-data'],
                    ['Мои шаблоны', 'my-templates'],
                    ['Уведомления', 'notifications'],
                    ['Настройки', 'settings'],
                    ['Сменить пароль', 'change-password'],
                ]}
                active={activeTab}
            /> 
            <SideMenuGroup 
                icon={<GridIcon/>} 
                groupId='company'
                groupName='Компания' 
                tabs={[
                    ['Данные о компании', 'about-company'],
                    ['Сотрудники', 'employees'],
                    ['Услуги', 'services'],
                    ['Клиенты', 'clients'],
                    ['Рассылки', 'mailings'],
                ]}
                active={activeTab}
            />
            {/* Последняя кнопка меню реализована как пустой SideMenuGroup */}
            <SideMenuGroup 
                icon={<SettingsIcon/>} 
                groupId='admin'
                groupName='Админ-панель' 
                tabs={[]}
                active={activeTab}
            />
        </div>
    );
}
  
export default SideMenuContents;