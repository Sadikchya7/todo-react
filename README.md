 <div className="tab">
      <select onChange={handleChange} defaultValue="ALL">
        <option value="ALL">ALL</option>
        <option value="COMPLETED">COMPLETED</option>
        <option value="INCOMPLETED">INCOMPLETED</option>
      </select>
    </div>
 <Tab
        onTaskComplete={taskCompleted}
        onTaskIncomplete={taskIncompleted}
        onAll={setFilterTask(null)}
      />
      <Tab
        config={[
          {
            label: "COMPLETED",
            onClick: () => {
              taskCompleted();
            },
          },
          {
            label: "INCOMPLETED",
            onClick: () => {
              taskIncompleted();
            },
          },
          {
            label: "ALL",
            onClick: () => {
              setFilterTask(null);
            },
          },
        ]}
      />
