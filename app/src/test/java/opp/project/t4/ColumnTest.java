package opp.project.t4;

import static org.junit.jupiter.api.Assertions.*;
import java.util.ArrayList;
import java.util.List;


import java.util.UUID;
import org.junit.jupiter.api.Test;

import opp.project.t4.exceptions.ColumnNotFoundException;

import opp.project.t4.exceptions.TaskNotFoundException;
class ColumnTest {
  private Column column;
  private Task task1;
  private Task task2;
  Priority priority;

  UUID id = UUID.randomUUID();

  @Test
  public void testToString() {
    UUID id1 = UUID.randomUUID();
    UUID id2 = UUID.randomUUID();
    column = new Column("To Do");
    task1 = new Task("Complete Report", "Finish the quarterly report", id1, Priority.HIGH);
    task2 = new Task("Design Review", "Review design documents", id2, Priority.MEDIUM);

    // Add tasks to the column
    column.addTask(task1);
    column.addTask(task2);
    String expectedOutput =
        "Column: To Do\n"
            + "Task ID: "
            + id1
            + "\nTitle: Complete Report\nDescription: Finish the quarterly report\nPriority: HIGH\n"
            + "Task ID: "
            + id2
            + "\nTitle: Design Review\nDescription: Review design documents\nPriority: MEDIUM\n";

        // Check if the actual output matches the expected output
        assertEquals(expectedOutput, column.toString(), "Column's toString method should return formatted task list");
    }
}
    // Check if the actual output matches the expected output
    assertEquals(
        expectedOutput,
        column.toString(),
        "Column's toString method should return formatted task list");
  }
}
