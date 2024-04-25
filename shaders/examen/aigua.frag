#version 330 core

in vec4 frontColor;
in vec2 vtexCoord;
out vec4 fragColor;

uniform sampler2D fons;
uniform sampler2D noise1;

uniform float time;

void main()
{
	vec2 noiseCoord = vec2(vtexCoord.x + 0.08*time, vtexCoord.y + 0.07*time);
	vec4 noise = texture(noise1,noiseCoord);
	
	vec2 waterCoord = vec2(noise.x,noise.y) * vec2(.003,-.005);
 
    fragColor = texture(fons,vec2(vtexCoord+waterCoord)) ;
}
