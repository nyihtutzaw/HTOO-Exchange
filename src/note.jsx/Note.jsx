<Router>
      {/* <Nav /> */}
      {/* <Navbar lists={lists} /> */}
      <Routes>
        {/* <Route path="admin/employee" element={<Employee />} /> */}
        {/*<Route path="/bank-name" element={<BankName />} />
        <Route path="/customer" element={<Customer />} /> */}
        <Route path="*" element={<Navigate to="/auth/login" />} />
        <Route
          path="/auth/login"
          element={
            <PirvateRoute>
              {/* <Admin /> */}
              <Route
                path="/"
                element={<Navigate to="/admin/list-employee"></Navigate>}
              ></Route>
              {/* stack routes */}
              <Route path="create-employee" element={<CreateEmployee />} />
              <Route path="edit-employee" element={<EditEmployee />} />
              <Route path="list-employee" element={<EmployeeList />} />
              {/* customer routes */}
              <Route path="create-customer" element={<CreateCustomer />} />
              <Route path="edit-customer" element={<EditCustomer />} />
              <Route path="list-customer" element={<CustomerList />} />

              {/* bank routes */}
              <Route path="create-bank" element={<BankName />} />
              <Route path="edit-bank" element={<EditBankName />} />
              <Route path="list-bank" element={<BankNameList />} />
              {/* branch routes */}
              <Route path="create-branch" element={<CreateBranch />} />
              <Route path="edit-branch" element={<EditBranch />} />
              <Route path="list-branch" element={<BranchList />} />
              {/* Role and  access routes */}
              <Route path="create-role-access" element={<CreateRoleAccess />} />
              <Route path="list-role-access" element={<RoleAndAccessList />} />

              {/* stack salary routes */}
              <Route path="create-stack-salary" element={<CreateStackSalary />} />
              <Route path="edit-stack-salary" element={<EditStackSalary />} />
              <Route path="list-stack-salary" element={<StackSalaryList />} />

              {/* expense rouetes */}
              <Route path="create-expense" element={<CreateExpense />} />
              <Route path="list-expense" element={<ExpenseList />} />
              {/* branch transfer routes */}
              <Route path="create-branch-transfer" element={<CreateBranchTransfer />} />
            </PirvateRoute>
          }
        />
        <Route
          path="/admin/*"
          element={
            <AuthRoute>
              <Login_form />
              {/* <Nav /> */}
            </AuthRoute>
          }
        />
      </Routes>
    </Router><Router>
      {/* <Nav /> */}
      {/* <Navbar lists={lists} /> */}
      <Routes>
        {/* <Route path="admin/employee" element={<Employee />} /> */}
        {/*<Route path="/bank-name" element={<BankName />} />
        <Route path="/customer" element={<Customer />} /> */}
        <Route path="*" element={<Navigate to="/auth/login" />} />
        <Route
          path="/auth/login"
          element={
            <PirvateRoute>
              {/* <Admin /> */}
              <Route
                path="/"
                element={<Navigate to="/admin/list-employee"></Navigate>}
              ></Route>
              {/* stack routes */}
              <Route path="create-employee" element={<CreateEmployee />} />
              <Route path="edit-employee" element={<EditEmployee />} />
              <Route path="list-employee" element={<EmployeeList />} />
              {/* customer routes */}
              <Route path="create-customer" element={<CreateCustomer />} />
              <Route path="edit-customer" element={<EditCustomer />} />
              <Route path="list-customer" element={<CustomerList />} />

              {/* bank routes */}
              <Route path="create-bank" element={<BankName />} />
              <Route path="edit-bank" element={<EditBankName />} />
              <Route path="list-bank" element={<BankNameList />} />
              {/* branch routes */}
              <Route path="create-branch" element={<CreateBranch />} />
              <Route path="edit-branch" element={<EditBranch />} />
              <Route path="list-branch" element={<BranchList />} />
              {/* Role and  access routes */}
              <Route path="create-role-access" element={<CreateRoleAccess />} />
              <Route path="list-role-access" element={<RoleAndAccessList />} />

              {/* stack salary routes */}
              <Route path="create-stack-salary" element={<CreateStackSalary />} />
              <Route path="edit-stack-salary" element={<EditStackSalary />} />
              <Route path="list-stack-salary" element={<StackSalaryList />} />

              {/* expense rouetes */}
              <Route path="create-expense" element={<CreateExpense />} />
              <Route path="list-expense" element={<ExpenseList />} />
              {/* branch transfer routes */}
              <Route path="create-branch-transfer" element={<CreateBranchTransfer />} />
            </PirvateRoute>
          }
        />
        <Route
          path="/admin/*"
          element={
            <AuthRoute>
              <Login_form />
              {/* <Nav /> */}
            </AuthRoute>
          }
        />
      </Routes>
    </Router>



------------------------------------------admin--------



<Routes>
        <Route
          path="/"
          element={<Navigate to="/admin/list-employee"></Navigate>}
        ></Route>
        {/* stack routes */}
        <Route path="create-employee" element={<CreateEmployee />} />
        <Route path="edit-employee" element={<EditEmployee />} />
        <Route path="list-employee" element={<EmployeeList />} />
        {/* customer routes */}
        <Route path="create-customer" element={<CreateCustomer />} />
        <Route path="edit-customer" element={<EditCustomer />} />
        <Route path="list-customer" element={<CustomerList />} />

        {/* bank routes */}
        <Route path="create-bank" element={<BankName />} />
        <Route path="edit-bank" element={<EditBankName />} />
        <Route path="list-bank" element={<BankNameList />} />
        {/* branch routes */}
        <Route path="create-branch" element={<CreateBranch />} />
        <Route path="edit-branch" element={<EditBranch />} />
        <Route path="list-branch" element={<BranchList />} />
        {/* Role and  access routes */}
        <Route path="create-role-access" element={<CreateRoleAccess />} />
        <Route path="list-role-access" element={<RoleAndAccessList />} />

        {/* stack salary routes */}
        <Route path="create-stack-salary" element={<CreateStackSalary />} />
        <Route path="edit-stack-salary" element={<EditStackSalary />} />
        <Route path="list-stack-salary" element={<StackSalaryList />} />

        {/* expense rouetes */}
        <Route path="create-expense" element={<CreateExpense />} />
        <Route path="list-expense" element={<ExpenseList />} />
        {/* branch transfer routes */}
        <Route path="create-branch-transfer" element={<CreateBranchTransfer />} />
        {/* {pages.map((page) => (
          <Route exact path={page.route} element={page.element}></Route>
        ))} */}
      </Routes>