import { createContext } from 'react';

const defaultValue = {};      // defaultValue là gì ?  
// --> nếu ko đưa value = gì thì nó sẽ lấy cái này
const AppContext = createContext(defaultValue);

export default AppContext;