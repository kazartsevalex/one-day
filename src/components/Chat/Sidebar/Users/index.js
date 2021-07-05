import React, { useCallback } from 'react';

import { useAppContext } from '../../../../contexts/AppContext';

const Users = () => {
  const { users, user, setUser } = useAppContext();

  const onChange = useCallback(
    (e) => {
      const val = e.target.value;

      if (val === user) return;

      setUser(e.target.value);
    },
    [setUser, user],
  );

  return (
    <select onChange={onChange}>
      {users.map(u => <option key={`user_${u}`} value={u}>{u}</option>)}
    </select>
  )
};

export default React.memo(Users);
