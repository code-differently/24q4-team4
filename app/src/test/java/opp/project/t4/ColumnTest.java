package opp.project.t4;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

class ColumnTest {
  private Column column;
  private Task task1;
  private Task task2;

  @Test
  public void testToString() {
    column = new Column("To Do");
    task1 = new Task("Complete Report", "Finish the quarterly report", "1", "High");
    task2 = new Task("Design Review", "Review design documents", "2", "Medium");

    // Add tasks to the column
    column.addTask(task1);
    column.addTask(task2);
    String expectedOutput =
        "Column: To Do\n"
            + "Task ID: 1\nTitle: Complete Report\nDescription: Finish the quarterly report\nPriority: High\n"
            + "Task ID: 2\nTitle: Design Review\nDescription: Review design documents\nPriority: Medium\n";

    // Check if the actual output matches the expected output
    assertEquals(
        expectedOutput,
        column.toString(),
        "Column's toString method should return formatted task list");
  }
}
