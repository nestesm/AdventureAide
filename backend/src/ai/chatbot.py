import openai
from config import settings as global_settings

class OpenAiChatbot:
    def __init__(self, api_key: str) -> None:
        openai.api_key = api_key
        self.engine = ""
        self.temperature=0.7
        self.max_tokens=150
        
    def ask(self, prompt):
        response = openai.Completion.create(
            engine=self.engine,
            response_format={ "type": "json_object" },
            prompt=prompt,
            temperature=self.temperature,
            max_tokens=self.max_tokens
        )
        return response.choices[0].text.strip()
    
chatbot = OpenAiChatbot(global_settings.open)