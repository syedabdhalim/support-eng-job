const TaskDisplay = require('../task_display');

describe('TaskDisplay', () => {
  let display;

  beforeEach(() => {
    const tasks = [
      { id: 1, title: "Write code", priority: "high" },
      { id: 2, title: "Test app", priority: "low" },
      { id: 3, title: "Deploy", priority: "high" }
    ];
    display = new TaskDisplay(tasks);
  });

  test('displayTasks shows all tasks', () => {
    const result = display.displayTasks();
    expect(result).toBe("1: Write code (high)\n2: Test app (low)\n3: Deploy (high)");
  });

  test('displayTasks handles empty list', () => {
    display = new TaskDisplay([]);
    expect(display.displayTasks()).toBe("");
  });

  test('filterByPriority finds high priority tasks', () => {
    const highTasks = display.filterByPriority("HIGH");
    expect(highTasks.length).toBe(2);
    expect(highTasks[0].title).toBe("Write code");
    expect(highTasks[1].title).toBe("Deploy");
  });

  test('getTaskCount returns correct number', () => {
    const count = display.getTaskCount();
    expect(typeof count).toBe("number");
    expect(count).toBe(3);
  });
});
