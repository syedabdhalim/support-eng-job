import unittest
from backend.task_manager import TaskManager

class TestTaskManager(unittest.TestCase):
    def setUp(self):
        self.manager = TaskManager()

    def test_add_task(self):
        self.manager.add_task(1, "Write code", "high")
        self.assertEqual(len(self.manager.tasks), 1)
        self.assertEqual(self.manager.tasks[0].title, "Write code")

    def test_duplicate_id(self):
        self.manager.add_task(1, "Task 1", "low")
        self.manager.add_task(1, "Task 2", "high")
        self.assertEqual(len(self.manager.tasks), 1, "Should not allow duplicate IDs")

    def test_update_status(self):
        self.manager.add_task(1, "Task 1", "low")
        self.manager.add_task(2, "Task 2", "high")
        self.manager.update_status(1, "completed")
        self.assertEqual(self.manager.tasks[0].status, "completed")
        self.assertEqual(self.manager.tasks[1].status, "pending")

    def test_update_status_not_found(self):
        self.manager.add_task(1, "Task 1", "low")
        result = self.manager.update_status(999, "completed")
        self.assertFalse(result)
        self.assertEqual(self.manager.tasks[0].status, "pending")

    def test_high_priority_tasks(self):
        self.manager.add_task(1, "Task 1", 1)  # Numeric priority
        self.manager.add_task(2, "Task 2", "high")
        self.manager.add_task(3, "Task 3", "low")
        high_tasks = self.manager.get_high_priority_tasks()
        self.assertEqual(len(high_tasks), 2, "Should find both high-priority tasks")

if __name__ == '__main__':
    unittest.main()
