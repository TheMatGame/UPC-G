#version 330 core

in vec4 frontColor;
in vec2 vtexCoord;
out vec4 fragColor;

uniform sampler2D colorMap;

const float a = 1.0/6.0;
const float b = 1.0/10.0;

void main()
{
	float s;
	int digit = int(vtexCoord.x / a); 
	if (digit == 0) s = (vtexCoord.x/a + 4) * b;
	else if (digit == 1) s = (vtexCoord.x/a + 5) * b;
	else if (digit == 2) s = (vtexCoord.x/a - 1) * b;
	else if (digit == 3) s = (vtexCoord.x/a - 1) * b;
	else if (digit == 4) s = (vtexCoord.x/a - 1) * b;
	else if (digit == 5) s = (vtexCoord.x/a - 1) * b;
	
	
	vec2 newCoord = vec2(s,vtexCoord.y);
    vec4 color = texture(colorMap,newCoord);
    
    if (color.a < 0.5) discard;
    else fragColor = vec4(0,0,1,1);
    

}
