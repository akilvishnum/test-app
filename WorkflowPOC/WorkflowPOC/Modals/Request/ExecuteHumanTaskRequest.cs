using System;
namespace WorkflowPOC.Modals.Request
{
	public class ExecuteHumanTaskRequest
	{
		int taskId { get; set; }

		string? action { get; set; }

		string? comments { get; set; }

		public ExecuteHumanTaskRequest()
		{

		}
	}

	public class CreateHumanTaskRequest
	{
        string taskType { get; set; }
    }
}

