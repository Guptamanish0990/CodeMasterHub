import { topics, learningData, interviewData, problemsData, practiceData } from '@/data';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const topic = searchParams.get('topic');
  const type = searchParams.get('type');
  
  if (topic && topics[topic]) {
    if (type === 'learn') {
      return Response.json({ content: learningData[topic] || "<p>Content coming soon</p>" });
    }
    if (type === 'interview') {
      return Response.json({ content: interviewData[topic] || [] });
    }
    if (type === 'problems') {
      return Response.json({ content: problemsData[topic] || [] });
    }
    if (type === 'questions') {
      return Response.json({ content: practiceData[topic] || [] });
    }
    return Response.json({ topic: topics[topic] });
  }
  return Response.json({ topics });
}