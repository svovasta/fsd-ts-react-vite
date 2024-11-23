import React, { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SecondPage } from 'src/pages/second-page';
import { ToDoListPage } from 'src/pages/to-do-list-page';
import { TopNavigator } from 'src/widgets/top-navigator';

export const App: FC = () => (
  <React.Suspense fallback={'Loading...'}>
    <TopNavigator />
    <Routes>
      <Route path={'/'} element={<ToDoListPage />} />
      <Route path={'/secondPage'} element={<SecondPage />} />
    </Routes>
  </React.Suspense>
);
