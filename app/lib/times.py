from datetime import datetime, date, timedelta

'''
Returns current time in Pacific Time.
'''
def ptnow():
    return datetime.utcnow() - timedelta(hours=7)

'''
Returns age in years given an ISO-formatted birthday string.
''' 
def agenow(birthDateIso):
    return int((date.today() - date.fromisoformat(birthDateIso)).days / 365.2425)